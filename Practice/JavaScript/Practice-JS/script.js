let profiles = [
    {
      name: 'Taylor Swift',
      username: '@taylorswift',
      isMember: false,
      status: 'Singer',
      profileImg: 'https://images.unsplash.com/photo-1604514628550-37477afdf4e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TW9kZWxzfGVufDB8fDB8fHww',
      avatarImg: 'https://images.unsplash.com/photo-1604514628550-37477afdf4e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TW9kZWxzfGVufDB8fDB8fHww'
    },
    {
      name: 'Selena Gomez',
      username: '@selenagomez',
      isMember: false,
      status: 'Actress',
      profileImg: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
      avatarImg: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      name: 'Billie Eilish',
      username: '@billieeilish',
      isMember: false,
      status: 'Composer',
      profileImg: 'https://plus.unsplash.com/premium_photo-1687186953637-78a495aec485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmlsbGllfGVufDB8fDB8fHww',
      avatarImg: 'https://plus.unsplash.com/premium_photo-1687186953637-78a495aec485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmlsbGllfGVufDB8fDB8fHww'
    }
  ];

  let profileName = document.getElementById('profileName');
  let profileImage = document.getElementById('profileImage');
  let avatarImage = document.getElementById('avatarImage');
  let username = document.getElementById('username');
  let status = document.getElementById('status');
  let addButton = document.getElementById('addButton');
  let buttonIcon = addButton.querySelector('.icon');
  let buttonText = addButton.querySelector('.button-text');
  let prevButton = document.getElementById('prevButton');
  let nextButton = document.getElementById('nextButton');
  let dotsContainer = document.getElementById('dots');
  
  let currentIndex = 0;
  
  function generateDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < profiles.length; i++) {
      let dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === currentIndex) {
        dot.classList.add('active');
      }
      dot.addEventListener('click', () => {
        showProfile(i);
      });
      dotsContainer.appendChild(dot);
    }
  }
  
  function showProfile(index) {
    if (index < 0) {
      index = profiles.length - 1;
    } else if (index >= profiles.length) {
      index = 0;
    }
    
    currentIndex = index;
    let profile = profiles[currentIndex];
    
    profileName.textContent = profile.name;
    profileImage.src = profile.profileImg;
    avatarImage.src = profile.avatarImg;
    username.textContent = profile.username;
    status.textContent = profile.status;
    
    if (profile.isMember) {
      addButton.classList.add('active');
      buttonIcon.textContent = '✓';
      buttonText.textContent = 'Member Now';
    } else {
      addButton.classList.remove('active');
      buttonIcon.textContent = '+';
      buttonText.textContent = 'Add Member';
    }
    
    let dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      if (i === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
  
  prevButton.addEventListener('click', () => {
    showProfile(currentIndex - 1);
  });
  
  nextButton.addEventListener('click', () => {
    showProfile(currentIndex + 1);
  });
  
  addButton.addEventListener('click', function() {
    profiles[currentIndex].isMember = !profiles[currentIndex].isMember;
    
    if (profiles[currentIndex].isMember) {
      addButton.classList.add('active');
      buttonIcon.textContent = '✓';
      buttonText.textContent = 'Member Now';
    } else {
      addButton.classList.remove('active');
      buttonIcon.textContent = '+';
      buttonText.textContent = 'Add Member';
    }
  });
  
  generateDots();
  showProfile(0);
