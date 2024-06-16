import React, { useState } from 'react';

const weatherSuggestions = {
  "eventplanners": "It's sunny today. A great day for an outdoor event!",
  "farmer": "Expect some rain later in the day. Good for crops, but plan accordingly.",
  "travellers": "Clear skies for most of the day. Perfect for travel.",
  // Add more occupations and suggestions as needed
};

function TextArea() {
  const [occupation, setOccupation] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleInputChange = (event) => {
    setOccupation(event.target.value.trim().toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const lowerCaseOccupation = occupation.toLowerCase();
    const suggestion = weatherSuggestions[lowerCaseOccupation] || "No weather suggestions available for this occupation.";
    setSuggestion(suggestion);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Weather Suggestions for Your Occupation</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label htmlFor="occupation">Enter your occupation:</label>
        <input
          type="text"
          id="occupation"
          value={occupation}
          onChange={handleInputChange}
          placeholder="e.g., event planners, farmer, travellers"
          style={{ padding: '8px', fontSize: '16px' }}
        />
        <button type="submit" style={{ padding: '10px', fontSize: '14px', backgroundColor: '#001b71', color: 'white', border: 'none', cursor: 'pointer' ,width:'200px',margin:'0 auto',borderRadius:'8px'}}>
          Get Weather Suggestion
        </button>
      </form>
      {suggestion && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f9f9f9', border: '1px solid #ddd' }}>
          <h3>Weather Suggestion:</h3>
          <p>{suggestion}</p>
        </div>
      )}
    </div>
  );
}

export default TextArea;

// import React, { useState } from 'react';

// // Weather suggestions including audio file paths
// const weatherSuggestions = {
//   "event planners": {
//     message: "It's sunny today. A great day for an outdoor event!",
//     audio: "sunny.mp3"
//   },
//   "farmer": {
//     message: "Expect some rain later in the day. Good for crops, but plan accordingly.",
//     audio: "rainy.mp3"
//   },
//   "travellers": {
//     message: "Clear skies for most of the day. Perfect for travel.",
//     audio: "clear.mp3"
//   },
//   // Add more occupations and suggestions as needed
// };

// function TextArea() {
//   const [occupation, setOccupation] = useState('');
//   const [suggestion, setSuggestion] = useState('');

//   const handleInputChange = (event) => {
//     setOccupation(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const lowerCaseOccupation = occupation.toLowerCase();
//     const suggestionData = weatherSuggestions[lowerCaseOccupation];

//     if (suggestionData) {
//       setSuggestion(suggestionData.message);
//       playAudioAlert(suggestionData.audio);
//     } else {
//       setSuggestion("No weather suggestions available for this occupation.");
//     }
//   };

//   const playAudioAlert = (audioFile) => {
//     const audio = new Audio(audioFile);
//     audio.play();
//   };

//   return (
//     <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
//       <h2>Weather Suggestions for Your Occupation</h2>
//       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//         <label htmlFor="occupation">Enter your occupation:</label>
//         <input
//           type="text"
//           id="occupation"
//           value={occupation}
//           onChange={handleInputChange}
//           placeholder="e.g., event planners, farmer, travellers"
//           style={{ padding: '8px', fontSize: '16px' }}
//         />
//         <button type="submit" style={{ padding: '10px', fontSize: '14px', backgroundColor: '#001b71', color: 'white', border: 'none', cursor: 'pointer' ,width:'200px',margin:'0 auto',borderRadius:'8px',fontWeight:600}}>
//           Get Weather Suggestion
//         </button>
//       </form>
//       {suggestion && (
//         <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f9f9f9', border: '1px solid #ddd' }}>
//           <h3>Weather Suggestion:</h3>
//           <p>{suggestion}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default TextArea;
