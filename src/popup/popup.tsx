import React, { useEffect, useState } from "react";
import axios from "axios";
import './popup.css'

const Popup = () => {
    const [text, setText] = useState("");
    const [jsonresult, setjsonresult] = useState("bulbul");
  async function getnews(search_prompt) {
    const newskey="OWo8NodaT48dpueZqh12TzMzDZ02O2IpnZsiSDnS";
  const url=`https://api.thenewsapi.com/v1/news/all?api_token=OWo8NodaT48dpueZqh12TzMzDZ02O2IpnZsiSDnS&search=${encodeURIComponent(search_prompt)}`;
  console.log("newzzz",search_prompt);
    const response=await axios.get(url);
    
    console.log(response);
    console.log(response.data);
    console.log(response.data.data);
    const arr=response.data.data;
    let results="";
    // ="Title: Can Elon Musk Dodge Dogecoin Investors' Insider-Trading Allegations? Snippet: A group of Dogecoin investors amended their lawsuit against Twitter and Tesla (TSLA) CEO Elon Musk, accusing him of insider trading and market manipulation of t... source: investors.com Title: Elon Musk Takes Dogecoin On A Wild Ride After He Tweets 1950s Song, Netizens Baffled Snippet: Tesla CEO Elon Musk has been a supporter of cryptocurrency and his opinion about them fluctuate their market price. Similar thing happened on May 20 as Musk twe... source: news.google.com Title: All the companies led by Elon Musk Snippet: Elon Musk is the world’s richest man. Though there are not too many companies led by Elon Musk, each of them is known for its pioneering achievements in scien... source: news.google.com";
     for(let i=0;i<arr.length;i++){
      results+=" "+i+" Title: "+arr[i].title+" Snippet: "+arr[i].snippet+" source: "+arr[i].source;
     }
     console.log(results);
     return results;
  }
  async function search_generate(tweet) {
    
    let requestData = {
      messages: [
        {
          role: "system",
          content:"you are a fake news detector and you also provide another perspective or side of the story so that users get to know both sides, i will provide you with a tweet give me back a search prompt to search for news related to it so that later on when i provide you with the news you tell me whether it is fake or not and also can provide with another perspective just write the search without anything else"
                },
        { role: "user", content: "Tweet" + tweet },
      ],
      model: "gpt-3.5-turbo",
      max_tokens: 1500,
    };
    console.log("searching prompt");
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      requestData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPEN_KEY}`,
        },
      }
    );
    return response.data.choices[0].message.content;
    
  }
  async function fakedetector(news,tweet) {
    news=news.replace(/\./g, ' ');
    console.log(news);
    // return ;
    let requestData = {
      messages: [
        {
          role: "system",
          content:"you are a fake news detector and you also provide another perspective or side of the story so that users get to know both sides , i will provide you with a tweet and give you some news related to it tell me whether the news is fake or not also give me a metric out of 10 to tell me about the reliability format should be in json ,also tell me about the propaganda rating out of 100  just 4 things in the json { reason_for_fake : reason_for_fake , reliability_score : reliability_score , propaganda_rating : propaganda_rating, another_perspective : another_perspective }"
                },
        { role: "user", content: "Tweet " + tweet +" News "+news },
      ],
      model: "gpt-3.5-turbo",
      max_tokens: 1500,
    };
    let response;
    try {
      console.log("axios req gpt");

      response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPEN_KEY}`,
          },
        }
      );
      console.log(response);
      
    } catch (error) {
      console.log(error);
    }
    
    return response?.data.choices[0].message.content;
    
  }
  async function everything(tweet) {
    console.log("tweets",tweet);
    // return;
    const prompt=await search_generate(tweet);
    console.log(prompt);
    // const prompt="Biden administration arms sales to Israel Gaza conflict";
    const news=await getnews(prompt);
    console.log("news",news);
    const jsonresp=await fakedetector(news,tweet);
    console.log(jsonresp);
    // setjsonresult(jsonresp);
    
  }
    useEffect(() => {
        // Listen for messages from the extension
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
          if (message.action === 'setText') {
            // setText(message.text);
            console.log("putting",message.text);
            everything(message.text);
          }
        });
    
        // Request text from the content script
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const tab = tabs[0];
          if (tab && tab.id !== undefined) {
            chrome.tabs.sendMessage(tab.id, { action: 'getText' });
          }
        });
      }, []);
    
    return (
        <div>
            <h1 className="text-4xl text-green-500">{jsonresult}</h1>
        </div>
    )
};

export default Popup;