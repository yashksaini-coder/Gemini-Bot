<div align="center">
   <img height="320" width="640" src="https://socialify.git.ci/yashksaini-coder/Gemini-Bot/image?forks=1&issues=1&name=1&pattern=Brick%20Wall&pulls=1&stargazers=1&theme=Auto">
</div>

## Introduction

Welcome to Gemini-Bot, your intelligent companion designed to revolutionize the way you interact with information. Leveraging the power of the Gemini AI platform, Gemini-Bot provides a seamless and intuitive interface for users to make both text and image queries. Whether you're looking for quick answers, detailed explanations, or visual insights, Gemini-Bot is here to assist you. With its advanced features like session storage and the use of the Fetch API for efficient server communication, Gemini-Bot ensures a smooth and engaging user experience. Get ready to explore a world of information at your fingertips with Gemini-Bot.



## Features

1. **Text and Image Queries**: Gemini-Bot allows users to make both text and image queries to the Gemini AI platform.
2. **Session Storage**: User queries and corresponding answers are stored in the sessionStorage, ensuring that chats are retained even after page reloads.
3. **Fetch API**: The Fetch API is used to send requests to the Flask server, enabling seamless communication without page reloads.

## Getting Started

### Requirements

- Web browser (Chrome, Firefox, Safari, etc.)
- Internet connection

### Installation

1. Clone the Gemini-Bot repository from GitHub.
   ```bash
   git clone https://github.com/yashksaini-coder/Gemini-Bot
   ```
2. Navigate to the Gemini-Bot directory.
   ```bash
   cd Gemini-Bot
   ```
3. Install the packages from requirements.txt
   ```bash
   pip install -r requirements.txt
   ```
4. Run `python app.py` from your preferred terminal.

### Usage

1. **Text Queries**:
   - Enter your text query in the text input field.
   - Press the "Send" button or hit Enter to submit the query.
   - View the response from the Gemini AI platform in the chat interface.

2. **Image Queries**:
   - Click the "Upload Image" button.
   - Select an image file from your device.
   - Enter your specific query for the image.
   - Wait for the response from the Gemini AI platform, which will be displayed in the chat interface.

3. **Session Storage**:
   - User queries and responses are stored in sessionStorage.
   - This ensures that chats are retained even if the page is reloaded or navigated away from.

4. **Fetch API**:
   - The Fetch API is used to send requests to the Flask server.
   - This communication method avoids page reloads, providing a smoother user experience.

3. **API Key**:
   - Please obtain your own API key from the Gemini AI platform at [https://ai.google.dev/](https://ai.google.dev/).
   - Replace the placeholder API key in the (`.env`) file with your own API key for proper functionality.
   # Contributing and Maintaining

   Thank you for your interest in contributing to the Gemini-Bot repository! Your contributions are highly appreciated. This document provides guidelines on how to contribute to the project and how to keep your fork up-to-date with the original repository.

   ## Contributing

   To contribute to the Gemini-Bot repository, please follow these steps:

   1. **Fork the Repository**: Click on the [Fork](https://github.com/yashksaini-coder/Gemini-Bot/fork) button at the top right corner of the repository page. This will create a copy of the repository in your GitHub account.

   2. **Clone the Repository**: Clone the forked repository to your local machine using the following command:
      ```bash
      git clone https://github.com/your-username/Gemini-Bot.git
      ```
      Replace `your-username` with your GitHub username.

   3. **Create a New Branch**: Create a new branch for your changes using the following command:
      ```bash
      git checkout -b feature-branch-name
      ```
      Replace `feature-branch-name` with a descriptive name for your branch.

   4. **Make Changes**: Make your desired changes to the codebase.

   5. **Commit Changes**: Commit your changes using the following commands:
      ```bash
      git add .
      git commit -m "Describe your changes"
      ```

   6. **Push Changes to GitHub**: Push your changes to your forked repository on GitHub using the following command:
      ```bash
      git push origin feature-branch-name
      ```

   7. **Create a Pull Request**: Navigate to your forked repository on GitHub and click on the "Compare & pull request" button. Provide a descriptive title and detailed description of your changes, then submit the pull request.

   ## Keeping Your Fork Up-to-Date

   To keep your fork up-to-date with the original repository, follow these steps:

   1. **Add the Original Repository as a Remote**: Add the original repository as a remote to your local repository using the following command:
      ```bash
      git remote add upstream https://github.com/yashksaini-coder/Gemini-Bot
      ```

   2. **Fetch Updates from the Original Repository**: Fetch the latest updates from the original repository using the following command:
      ```bash
      git fetch upstream
      ```

   3. **Merge Updates into Your Fork**: Switch to the main branch of your local repository and merge the updates from the original repository using the following commands:
      ```bash
      git checkout main
      git merge upstream/main
      ```

   4. **Push Updates to Your GitHub Fork**: Push the updates to your forked repository on GitHub using the following command:
      ```bash
      git push origin main
      ```
Thank you for your contributions and happy coding! 🚀
