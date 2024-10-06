// "use client";

// import { useEffect, useState, useRef } from "react";
// import { sendToLlama } from "./api/chat/route";
// import { FaRobot, FaUser } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';

// const Message = ({ text, isBot }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20, scale: 0.9 }}
//     animate={{ opacity: 1, y: 0, scale: 1 }}
//     exit={{ opacity: 0, y: -20, scale: 0.9 }}
//     transition={{ duration: 0.5, type: "spring" }}
//     className={`message ${isBot ? 'bot' : 'user'}`}
//   >
//     {isBot ? <FaRobot className="icon bot-icon" /> : <FaUser className="icon user-icon" />}
//     <motion.p
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.2, duration: 0.5 }}
//     >
//       {text}
//     </motion.p>
//   </motion.div>
// );

// const StarryBackground = () => {
//   const [stars, setStars] = useState([]);

//   useEffect(() => {
//     const generateStars = () => {
//       const newStars = [];
//       for (let i = 0; i < 100; i++) {
//         newStars.push({
//           id: i,
//           left: `${Math.random() * 100}%`,
//           top: `${Math.random() * 100}%`,
//           size: `${Math.random() * 2 + 1}px`,
//           animationDuration: `${Math.random() * 3 + 2}s`,
//           animationDelay: `${Math.random() * 2}s`,
//         });
//       }
//       setStars(newStars);
//     };

//     generateStars();
//   }, []);

//   return (
//     <div className="background">
//       <div className="stars">
//         {stars.map((star) => (
//           <div
//             key={star.id}
//             className="star"
//             style={{
//               left: star.left,
//               top: star.top,
//               width: star.size,
//               height: star.size,
//               animationDuration: star.animationDuration,
//               animationDelay: star.animationDelay,
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
// export default function Home() {
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const chatBoxBodyRef = useRef(null);

//   const addMessage = (id, text, isBot) => {
//     setMessages([...messages, { id, text, isBot }]);
//   };

//   const handleSendClick = () => {
//     if (inputValue.trim() !== "") {
//       addMessage(messages.length + 1, inputValue, false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSendClick();
//     }
//   };

//   useEffect(() => {
//     if (messages.length === 0) {
//       addMessage(1, "Hello! I'm Kazir AI. How can I assist you today?", true);
//     }
//     if (messages.length > 0 && !messages[messages.length - 1].isBot) {
//       sendToLlama(messages.length, inputValue.trim(), addMessage);
//       setInputValue("");
//     }
//   }, [messages, addMessage, inputValue]);

//   useEffect(() => {
//     if (chatBoxBodyRef.current) {
//       chatBoxBodyRef.current.scrollTop = chatBoxBodyRef.current.scrollHeight;
//     }
//   }, [messages]);

//   return (
//     <main className="chat-container">
//       <StarryBackground />
//       <motion.div 
//         className="chat-box"
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="chat-box-header">
//           <motion.h1 
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//           >
//           🤖 Kazir AI Support
//           </motion.h1>
//         </div>
//         <div className="chat-box-body" ref={chatBoxBodyRef}>
//           <AnimatePresence>
//             {messages.map((message) => (
//               <Message
//                 key={message.id}
//                 text={message.text}
//                 isBot={message.isBot}
//               />
//             ))}
//           </AnimatePresence>
//         </div>
//         <motion.div 
//           className="chat-box-footer"
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.5 }}
//         >
//           <input
//             type="text"
//             placeholder="Type your message"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             onKeyPress={handleKeyPress}
//           />
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             onClick={handleSendClick}
//           >
//             Send
//           </motion.button>
//         </motion.div>
//       </motion.div>
//     </main>
//   );
// }

"use client";
import { useEffect, useState, useRef } from "react";
import { sendToLlama } from "./api/chat/route";
import { FaRobot, FaUser } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Message = ({ text, isBot }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -20, scale: 0.9 }}
    transition={{ duration: 0.5, type: "spring" }}
    className={`message ${isBot ? 'bot' : 'user'}`}
  >
    {isBot ? <FaRobot className="icon bot-icon" /> : <FaUser className="icon user-icon" />}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {text}
    </motion.p>
  </motion.div>
);

const StarryBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: `${Math.random() * 2 + 1}px`,
          animationDuration: `${Math.random() * 3 + 2}s`,
          animationDelay: `${Math.random() * 2}s`,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="background">
      <div className="stars">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDuration: star.animationDuration,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const chatBoxBodyRef = useRef(null);

  // Initialize with welcome message if not already present
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ id: 1, text: "Hello! I'm ExoVoyageAI. How can I assist you today?", isBot: true }]);
    }
  }, [messages]);

  // Add user message and get bot response
  useEffect(() => {
    if (messages.length > 0 && !messages[messages.length - 1].isBot) {
      const lastMessage = messages[messages.length - 1].text;
      sendToLlama(messages.length, lastMessage, (id, text, isBot) => {
        setMessages(prevMessages => [...prevMessages, { id, text, isBot }]);
      });
      setInputValue(""); // Clear input after sending
    }
  }, [messages]);

  useEffect(() => {
    if (chatBoxBodyRef.current) {
      chatBoxBodyRef.current.scrollTop = chatBoxBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendClick = () => {
    if (inputValue.trim() !== "") {
      setMessages(prevMessages => [...prevMessages, { id: prevMessages.length + 1, text: inputValue.trim(), isBot: false }]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission
      handleSendClick();
    }
  };

  return (
    <main className="chat-container">
      <StarryBackground />
      <motion.div 
        className="chat-box"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="chat-box-header">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
          ExoVoyageAI
          </motion.h1>
        </div>
        <div className="chat-box-body" ref={chatBoxBodyRef}>
          <AnimatePresence>
            {messages.map((message) => (
              <Message
                key={message.id}
                text={message.text}
                isBot={message.isBot}
              />
            ))}
          </AnimatePresence>
        </div>
        <motion.div 
          className="chat-box-footer"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <input
            type="text"
            placeholder="Type your message"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={handleSendClick}
          >
            Send
          </motion.button>
        </motion.div>
      </motion.div>
    </main>
  );
}
