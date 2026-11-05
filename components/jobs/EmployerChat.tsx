"use client";

import { useState, type FormEvent } from "react";
import styles from "./jobs.module.css";

interface EmployerChatProps {
  company: string;
}

export default function EmployerChat({ company }: EmployerChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return;
    }

    setMessages((current) => [...current, trimmedMessage]);
    setMessage("");
  }

  return (
    <div className={styles.chat}>
      <button
        className={styles.primaryButton}
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? "Close chat" : "Message employer"}
      </button>

      {isOpen && (
        <section
          className={styles.chatPanel}
          aria-label={`Chat with ${company}`}
        >
          <h3>Message {company}</h3>
          <p className={styles.chatNotice}>
            Demo chat: messages stay on this page and are not delivered to the
            employer.
          </p>
          <div
            className={styles.chatMessages}
            role="log"
            aria-label="Demo conversation"
            aria-live="polite"
          >
            {messages.length === 0 ? (
              <p>Ask a question about the role or team to try the demo.</p>
            ) : (
              messages.map((sentMessage, index) => (
                <p className={styles.chatMessage} key={`${index}-${sentMessage}`}>
                  <strong>You</strong>
                  {sentMessage}
                </p>
              ))
            )}
          </div>
          <form className={styles.chatForm} onSubmit={sendMessage}>
            <label htmlFor="employer-message">Your message</label>
            <textarea
              id="employer-message"
              rows={3}
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Write a message..."
            />
            <button
              className={styles.primaryButton}
              type="submit"
              disabled={!message.trim()}
            >
              Send demo message
            </button>
          </form>
        </section>
      )}
    </div>
  );
}
