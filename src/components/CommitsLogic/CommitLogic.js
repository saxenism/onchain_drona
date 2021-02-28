import {Octokit} from '@octokit/rest';
import React, {useEffect, useState} from 'react';

const Logic = () => {
    // useState hook for collecting repos of a user 
    const [userRepos, setUserRepos] = useState([]);
    //useState hook for collecting recent commits of a user
    const [commits, setCommits] = useState([]);
    const octokit = new Octokit({auth: process.env.React_App_Github_Key });

    useEffect(() => {
        async function getRepos() {
            const repos = await octokit.repos.listForUser({
                username: "hinduBale",
                type: "public",
            });
            // console.log(repos);
            setUserRepos(repos.data);
        };
        getRepos();
    }, [userRepos]);

    useEffect(() => {
        async function getCommits() {
            const funCommits = await octokit.request(
                `GET /repos/{owner}/{repo}/commits`, {
                    owner: "hinduBale",
                    repo: "rco",
                    per_page: 5,

                }
            );
            console.log(funCommits.data[0].commit.author.date); // This is the date and time obtained of the last commit of the author
            setCommits(funCommits);
        };
        getCommits();
    }, []);

    return (userRepos.length ? 
        <ul>
            {userRepos.map((reptile) => (
                <li>{reptile.name}</li>
            ))}
        </ul> : 
        <h1>Failed</h1>);
};

export default Logic;