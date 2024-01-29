# Gemini Bot

## Overview
Gemini Bot is a conversational agent powered by a generative model from Google's GenerativeAI service. It allows users to engage in text-based conversations by asking questions or initiating discussions. The bot utilizes Streamlit, a Python library for building interactive web applications, to create a user-friendly interface for interaction.

## Requirements
- Python 3.11
- Streamlit
- Google GenerativeAI account and API key

## Installation
1. Clone GitHub repository:- <br>
<code>git clone https://github.com/yashksaini-coder/Gemini-Bot</code>

2. Install the required Python packages using pip:-<br>
<code>pip install streamlit google-generativeai</code>

3. Obtain a Google GenerativeAI API key by signing up for an account and following the instructions provided by Google.
4. Set the API key as an environment variable named `GOOGLE_API_KEY`.

## Running the Application
### To run the Gemini Bot application:-

1. Navigate to the directory where the `gemini-bot.py` file is located.
2. Run the Streamlit application using the following command:-<br>
<code>streamlit run gemini-bot.py</code>


3. The application will start, and you should see the title "Gemini Bot" displayed in your browser.

## Usage
Once the Gemini Bot application is running, users can interact with the bot by typing their queries or messages into the chat input field provided.

### Conversation Flow
1. Upon starting the application, the bot welcomes the user and prompts them to ask a question or start a conversation.
2. Users can type their queries or messages in the chat input field and press Enter to submit.
3. The bot processes the user input and generates a response based on the provided query.
4. The conversation history is displayed in the chat interface, showing messages from both the user and the bot.

### Features
- **Chat Interface**:- The application provides a chat-like interface where users can type messages and receive responses from the bot.
- **Dynamic Interaction**:- The bot dynamically updates the conversation history with each user interaction.
- **Google GenerativeAI Integration**:- Gemini Bot leverages Google's GenerativeAI service to generate responses to user queries.

## Working
- The application utilizes the `google.generativeai` module to interact with the GenerativeAI service.
- User messages and bot responses are stored in the `st.session_state.messages` list to maintain conversation history.
- The `llm_function` method processes user queries, generates responses using the GenerativeAI model, and updates the conversation history.

## Future Improvements
- Integration with additional conversational AI models for enhanced response generation.
- Implementation of natural language understanding (NLU) techniques to improve the bot's ability to understand user queries.
- Support for multimedia content such as images, videos, and links within the chat interface.
- Adding langchain to provide chat with pdf, text, csv documents.

## Conclusion
Gemini Bot provides a simple yet effective platform for engaging in text-based conversations powered by state-of-the-art generative models. By leveraging Streamlit and Google's GenerativeAI service, the application offers a seamless user experience and demonstrates the potential of AI-driven conversational interfaces.
