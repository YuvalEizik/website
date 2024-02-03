const pcBuildSuggestions = {
  "purpose": {
    "gaming": {
      "fields": ["game", "resolution", "fps"],
      "game": ["Fortnite", "PUBG", "League of Legends", "CS:GO"],
      "resolution": ["1080p", "2k", "4k"],
      "fps": ["60", "120", "144", "240"]
    },
    "contentCreation": {
      "fields": ["software", "resolution", "multitasking"],
      "software": ["Photoshop", "Premiere Pro", "After Effects", "DaVinci Resolve"],
      "resolution": ["1080p", "2k", "4k"],
      "multitasking": ["moderate", "heavy"]
    },
    "streaming": {
      "fields": ["platforms", "resolution", "fps"],
      "platforms": ["Twitch", "YouTube", "Facebook"],
      "resolution": ["720p", "1080p", "2k"],
      "fps": ["30", "60"]
    },
    "productivityOfficeWork": {
      "fields": ["software", "multitasking", "internetConnectivity"],
      "software": ["Microsoft Office", "Google Workspace", "Zoom"],
      "multitasking": ["light", "moderate"],
      "internetConnectivity": ["Wi-Fi", "Ethernet"]
    },
    "programmingDevelopment": {
      "fields": ["tools", "resolution", "multitasking"],
      "tools": ["Visual Studio Code", "Git", "Docker"],
      "resolution": ["1080p", "2k", "4k"],
      "multitasking": ["light", "moderate"]
    },
    "educationLearning": {
      "fields": ["platforms", "resolution", "multitasking"],
      "platforms": ["Khan Academy", "Coursera", "Udemy"],
      "resolution": ["1080p", "2k", "4k"],
      "multitasking": ["light", "moderate"]
    },
    "homeTheaterMediaCenter": {
      "fields": ["resolution", "storage", "multitasking"],
      "resolution": ["1080p", "2k", "4k", "8k"],
      "storage": ["1TB", "2TB", "4TB"],
      "multitasking": ["light", "moderate"]
    },
    // Additional purposes can be added here with their respective options
  }
};


function updateFormFields(selectedPurpose) {
  const purposeData = pcBuildSuggestions.purpose[selectedPurpose];

  if (purposeData) {
    const headers = document.querySelectorAll('th[id^="header"]');
    const inputs = document.querySelectorAll('input[list^="option"]');
    const datalists = document.querySelectorAll('datalist');

    // Clear existing options before updating
    headers.forEach(header => (header.textContent = ''));
    inputs.forEach(input => (input.value = ''));
    datalists.forEach(datalist => (datalist.innerHTML = ''));

    // Populate the first row with fields
    purposeData.fields.forEach((field, index) => {
      headers[index].textContent = field;
    });

    // Populate the second row with lists
    purposeData.fields.forEach((field, index) => {
      const datalistId = `option${index + 1}List`;
      const datalist = document.getElementById(datalistId);

      if (datalist) {
        purposeData[field].forEach(item => {
          const option = document.createElement('option');
          option.value = item;
          datalist.appendChild(option);
        });
      }
    });
  } else {
    console.warn(`Purpose '${selectedPurpose}' not found.`);
  }
}


// Call the function with an example purpose
updateFormFields('gaming');

