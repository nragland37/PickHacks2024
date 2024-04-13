![License](https://img.shields.io/badge/license-MIT-blue)

<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/nragland37/PickHacks2024/tree/main">
    <img src="https://github.com/nragland37/PickHacks2024/blob/main/public/img/conscious_logo.png" alt="Logo" width="200" height="200">
  </a>
   <br />
    <br />
  <p align="center">
    Protect national security and create a conscious online community by combating social media misinformation, propaganda, and digital manipulation.
    <br />
  </p>
</div>
<div align="center">
<a href="https://youtu.be/I2-JWIZB_KU"> View Demo </a>
</div>
<br />

# Inspiration

Our project draws its inspiration from the insightful teachings of **Dr. James Curtis**, Department Chair of the Computer and Information Sciences Department. Dr. Curtis introduced us to the concept of the **"Triad of Disruption"**, a framework that examines the intertwining of digital social engineering, social media, and propaganda/fake news. This triad forms a potent tool for information manipulation and warfare, leveraged by various entities to influence public opinion and destabilize democracies. Recognizing the power of digital platforms in shaping political narratives, our project aims to demystify and counteract the effects of propaganda, particularly in the realm of political propaganda. By doing so, we hope to contribute to a more informed and conscious digital user.

<div align="center">
  <a href="https://ibb.co/G9zq6Qx">
<img src="https://i.ibb.co/xYxNkqC/triad3.png" alt="triad3" border="0" />
</a>
  <p align="center">
    The Triad of Disruption
    <br />
  </p>
</div>

> "The triad takes the Digital Social Triangle and expands upon two of its elements, digital social engineering and social media, adding in propaganda/fake news to become a powerful information weapon." - Dr. James Curtis

## Description 

Our Chrome extension is designed to analyze individual tweets, focusing on political propaganda, to assess and display their **propaganda rating**, **reliability**, and **an opposing perspective** within the extension. Here's a breakdown of its core functionalities:

### Propaganda Rating
Utilizes advanced APIs to evaluate whether a source disseminates high or low volumes of propaganda, helping users discern the trustworthiness of the content.

### Reliability
Analyzes the content to assign a reliability score on a scale from 1 to 10, where 1 signifies not reliable and 10 indicates high reliability. This metric aids users in evaluating the credibility of the information.

### Perspective
Provides a message of oppossing perspective generated by the APIs, providing users with a broader view of the narrative being pushed by the source.

Through these functionalities, our extension allows users to critically engage with and understand the content they encounter online, empowering a more informed and critical online community.

## Framework and APIs
Built with React JS, Tailwind CSS, and TypeScript, our extension offers a sleek and user-friendly interface. It integrates the following APIs for enhanced content analysis:

- **GPT-3 & GPT-3.5-Turbo** 
- **TheNewsAPI**

## Process Flow
<div align="center">
  <a href="https://github.com/nragland37/PickHacks2024/tree/main">
    <img src="https://github.com/nragland37/PickHacks2024/blob/main/public/img/diagram.png" alt="Logo">
  </a>
  <p align="center">
    Analyzing Tweet Reliability and Perspective
    <br />
  </p>
</div>

The process starts with extracting tweet text via the Conscious extension. This text is then processed by GPT-3 Turbo AI to create a search prompt, which is used to query a news API for relevant articles. These articles, along with the original tweet, are analyzed by GPT-4, which assesses reliability, offers different perspectives, and evaluates propaganda levels. The findings are then displayed to the user through the Conscious extension.

## Getting Started

To run locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/nragland37/PickHacks2024.git
```

2. Navigate into the project directory:
```bash
cd PickHacks2024
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run build
```

5. Apply for an OpenAI API key [here](https://platform.openai.com/account/api-keys) / create .env file in root directory
```bash
OPEN_KEY=[your-openai-api-key]
```

### Chrome (Only)
1. Open chrome and navigate to extensions page using this URL: chrome://extensions.
2. Enable the "Developer mode".
3. Click "Load unpacked extension" button, browse the `PickHacks2024/dist` directory and select it.

![Install in chrome](https://res.cloudinary.com/chat-story/image/upload/v1665128418/automa/chrome_QWxClxFcio_d9pqp8.png)

### Sample
<br />
<div align="center ">
  <a href="https://github.com/nragland37/PickHacks2024/tree/main">
    <img src="https://github.com/nragland37/PickHacks2024/blob/main/public/img/conscious-perspective.png" alt="perspective" width="70%">
  </a>
  <br />
  <br />
  <a href="https://github.com/nragland37/PickHacks2024/tree/main">
    <img src="https://github.com/nragland37/PickHacks2024/blob/main/public/img/conscious-propaganga.png" alt="propaganda" width="70%">
  </a>
  <br />
  <br />
  <a href="https://github.com/nragland37/PickHacks2024/tree/main">
    <img src="https://github.com/nragland37/PickHacks2024/blob/main/public/img/conscious-reliability.png" alt="reliability" width="70%">
  </a>
  
</div>
   <br />

## Future Plans
- **Cross-Browser Compatibility:** Extend support to ensure seamless functionality across all major web browsers.
- **Wider Social Media Integration:** Implement the extension across additional social media platforms to broaden its impact.
- **Deepfake Detection:** Expand capabilities to include the identification and analysis of deepfake videos.
