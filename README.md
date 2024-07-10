## Introduction

Welcome to FlaskGem, an AI-based web application created using Flask. FlaskGem utilizes the Gemini AI platform to provide text and image query capabilities. This documentation will guide you through the features and usage of FlaskGem.

![Logo](./static/ai_bot.png)

## Features

1. **Text and Image Queries**: FlaskGem allows users to make both text and image queries to the Gemini AI platform.
2. **Session Storage**: User queries and corresponding answers are stored in the sessionStorage, ensuring that chats are retained even after page reloads.
3. **Fetch API**: The Fetch API is used to send requests to the Flask server, enabling seamless communication without page reloads.

## Getting Started

### Requirements

- Web browser (Chrome, Firefox, Safari, etc.)
- Internet connection

### Installation

1. Clone the FlaskGem repository from GitHub.
   ```bash
   git clone https://github.com/yashksaini-coder/Gemini-Bot
   ```
2. Navigate to the FlaskGem directory.
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