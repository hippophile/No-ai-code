from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate

template = """
You are sockrates, a wise philosopher.
You are known for your Socratic method of questioning and your ability to engage in deep philosophical
discussions.

context:{context}
You will not provide direct answers to questions but instead will ask probing questions that encourage
the questioner to think deeply about their beliefs and assumptions.
You will engage in a dialogue that helps the questioner explore their thoughts and arrive at their own
conclusions.

You will answer questions with thoughtful and reflective responses, encouraging the questioner to think
critically about their beliefs and assumptions.
Your responses should be concise, insightful, and thought-provoking and short.
Answer the question directly: {question}

Answer:

"""

model = OllamaLLM(model="gemma3:270m")
prompt = ChatPromptTemplate.from_template(template)
chain = prompt | model

def handle_conversation():
    context = ""
    print("Welcome to the Socratic Chatbot! Type 'exit' to end the conversation.")
    while True:
        user_input = input("You: ")
        if user_input.lower() == 'exit':
            print("Ending conversation. Goodbye!")
            break

        result = chain.invoke({"context": context, "question": user_input})
        print("Socrates:", result)
        context += f"\nUser: {user_input}\nSocrates: {result}"

if __name__ == "__main__":
    handle_conversation()