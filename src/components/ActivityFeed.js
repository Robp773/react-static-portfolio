import React from 'react';
import axios from 'axios';
import GitHub from 'github-api';
import moment from 'moment';

export default class ActivityFeed extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      commits: null
    };
  }

  componentDidMount() {

    var gh = new GitHub({
      token: 'fbe4921af8b094f62233dfbaf578cd97d772d2dd'
    });

    let me = gh.getUser();
    me.getProfile().then((userData)=>{
      let recentRepos = [];
      let commitReqs = [];
      let commitList = [];
      me.listRepos().then((res) => {
        for (let i = 0; i < 4; i++) {
          recentRepos.push(res.data[i].name)
        }
        // for each recent repository name
        recentRepos.map((item) => {
          // push a new promise
          commitReqs.push(
            new Promise((resolve, reject) => {
              // that gets all of the commits from the repo
              // and pushes them into an array
              gh.getRepo('Robp773', item).listCommits().then((res) => {
                res.data.map((commit) => {
                  if (commit.commit.author.name === 'Rob') {
                    commitList.push({
                      repo: item,
                      commitMsg: commit.commit.message,
                      time: commit.commit.author.date
                    })
                  }
                })
                resolve()
              })
            })
          )
        })

        Promise.all(commitReqs).then(() => {
          let sortedCommits = commitList.sort(function (a, b) {
            return moment(b.time) - moment(a.time)
          });

          this.setState({
            commits: sortedCommits,
            userData: userData.data
          })
        })
      })
    })
  }

  render(){
    if(this.state.userData){
    return(
        <div id='activity'>
          <div>
            <h3>Recent Commits</h3>
            {this.state.commits.map((item, index)=>{
              return (
                      <div key={index}>
                        <div>{item.repo}</div>
                        <div>{item.commitMsg}</div>
                        <div>{moment(item.time).format("dddd, M/D, h:mm a")}</div>    
                      </div>
                    )
              })}
            </div>
        </div>
    )
  }
  else{
    return <h1>LOADING</h1>
  }
}
}
