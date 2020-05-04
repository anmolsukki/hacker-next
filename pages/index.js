import React, { Component } from 'react';
import Link from "next/link";
import Error from "next/error"
import fetch from "isomorphic-fetch";
import Layout from "../Components/Layout"
import StoryList from "../Components/StoryList";

class Index extends Component {

  static async getInitialProps({req, res, query}) {
    let stories;
    let page;
    try {
      page = Number(query.page) || 1
      const response = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
      stories = await response.json();
    }
    catch (err) {
      console.log(err)
      stories = [];
    }
    return { page, stories };
  }  

  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(registration => {
          console.log("service worker registration successful", registration);
        })
        .catch(err => {
          console.warn("service worker registration failed", err.message);
        });
    }
  }

  render() {
    const { page, stories } = this.props;
    if (stories.length === 0) {
      return <Error statusCode={503} />
    }
    
    return (
      <Layout title="Hacker Next" description="A Hacker News Clone With Next.js ">
        <h1>Hacker Next</h1>
        <StoryList stories={stories} />
        <footer>
          <Link href={`/?page=${page+1}`}>
            <a>Next Page ({page+1} )</a>
          </Link>
        </footer>

        <style jsx>{`
          footer {
            padding: 1em;
          }
          footer a {
            font-weight: bold;
            color: black;
            text-decoration: none;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Index;