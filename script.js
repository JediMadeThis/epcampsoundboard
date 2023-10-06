new Audio('./sounds/Careless Whisper.mp3');
new Audio('./sounds/Mozart - Symphony No. 40 (Molto Allegro).mp3');
new Audio('./sounds/White Tee.mp3');
new Audio('./sounds/Vine Boom Sound Effect.mp3');
new Audio('./sounds/Vine Boom Sound Effect Spam.mp3');

document.querySelectorAll('button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const btnId = btn.getAttribute('id');

    const a = {
      s1: document.getElementById('a1'),
      s2: document.getElementById('a2'),
      s3: document.getElementById('a3'),
      s4: document.getElementById('a4'),
      s5: document.getElementById('a5'),
    };

    if (btnId === 'stopAudio') {
      a.s1.pause();
      a.s2.pause();
      a.s3.pause();
      a.s4.pause();
      a.s5.pause();

      a.s1.currentTime = 0;
      a.s2.currentTime = 0;
      a.s3.currentTime = 0;
      a.s4.currentTime = 0;
      a.s5.currentTime = 0;

      console.log('Stopping all sounds...');
    } else {
      a[btnId].play();
    }
  });
});
