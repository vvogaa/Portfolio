
$(function(){
    const arrImages = [
        {
            src: "images/lowpoli1.png",
            desc: "Image Description 1"
        },
        {
            src: "images/fur.png",
            desc: "Image Description 2"
        },
        {
            src: "images/lowpoli2.png",
            desc: "Image Description 3"
        },
        {
            src: "images/venom.png",
            desc: "Image Description 4"
        },
        {
            src: "images/textures.png",
            desc: "Image Description 5"
        }
    ];
    
    const arrVideos = [
        {
            src: "NXTrnr/NXTrnr.mp4",
            desc: "3D Design, I.A. and Animation",
            thumbnail: "NXTrnr/NXTrnr.jpg"
        },
        {
            src: "video1/PSSQEI.mp4",
            desc: "Kinetic text, Animation, Music, Lyrics, Mix & Master",
            thumbnail: "thumbs2/PSSQEI.png"
        },
        /*{
            src: "XXLrnr/XXLrnr.mp4",
            desc: "Reel Animation",
            thumbnail: "XXLrnr/XXLrnr.jpg"
        },*/
        {
            src: "SALAXCLUBrnr/SALAXCLUBrnr.mp4",
            desc: "Reel Design and animation",
            thumbnail: "SALAXCLUBrnr/SALAXCLUBrnr.jpg"
        },
        /*{
            src: "LA2CLUBrnr/LA2CLUBrnr.mp4",
            desc: "Reel Design and animation",
            thumbnail: "LA2CLUBrnr/LA2CLUBrnr.jpg"
        },*/
        {
            src: "canva/canvaOS2.mp4",
            desc: "Spotify Canva, Music, Mix & Master",
            thumbnail: "thumbs1/canvaOS.jpg"
        },
        /*{
            src: "rrss/RRSS2.mp4",
            desc: "Cover art, Promo reel, Music, Lyrics, Mix & Master",
            thumbnail: "thumbs2/RRSS.jpg"
        },
        {
            src: "NXTrnr/NXTrnr.mp4",
            desc: "3D Design, I.A. and Animation",
            thumbnail: "NXTrnr/NXTrnr.jpg"
        },
       {
            src: "alitas/alitas_1.mp4",
            desc: "Videoclip, Music, Lyrics, Mix & Master",
            thumbnail: "thumbs1/alitas.png"
        },
         {
            src: "blu/blu.mp4",
            desc: "Visualizer, Music, Lyrics, Mix & Master",
            thumbnail: "thumbs1/blu.png"
        },*/
        /*{
            src: "porsi/porsi.mp4",
            desc: "Visualizer montage, VFX, Music, Lyrics, Mix & Master",
            thumbnail: "thumbs2/porsi.png"
        },*/
        {
            src: "BEArnr/BEArnr.mp4",
            desc: "Reel Animation",
            thumbnail: "BEArnr/BEArnr.jpg"
        },
        {
            src: "guess/guess_1.mp4",
            desc: "Motion graphics, Sound design",
            thumbnail: "thumbs1/ojo.png"
        },
        {
            src: "petri/petri.mp4",
            desc: "3D, VFX, Montage, Music, Lyrics, Mix & Master",
            thumbnail: "thumbs1/petri.png"
        },
        /*{
            src: "sos/SOS_1.mp4",
            desc: "VFX, Montage, Camera",
            thumbnail: "thumbs2/sos.jpg"
        },*/
                {
            src: "EH/EH.mp4",
            desc: "Color grading, Montage, Camera",
            thumbnail: "EH/EH.jpg"
        },
        /*{
            src: "video1/SHAPES.mp4",
            desc: "3D Models, Shape keys",
            thumbnail: "thumbs2/shapes.jpg"
        },*/
        {
            src: "animation/Animation_1.mp4",
            desc: "3D Riggin, Animation, UV, Sound design",
            thumbnail: "thumbs1/bolacola.jpg"
        },
        {
            src: "textures/texturess_1.mp4",
            desc: "3D Textures",
            thumbnail: "thumbs1/textures.png"
        },
        {
            src: "3D/3D.mp4",
            desc: "3D Textures",
            thumbnail: "3D/3D.jpg"
        },
        {
            src: "pato/sfxpato1.mp4",
            desc: "Sound design",
            thumbnail: "thumbs2/sfxpato.jpg"
        },
        {
            src: "coche/videocoche1.mp4",
            desc: "Sound design",
            thumbnail: "thumbs1/videocoche.jpg"
        },
        
        {
            src: "teaser/teaser1.mp4",
            desc: "Teaser Montage, Sound design",
            thumbnail: "thumbs2/teaser.jpg"
        },
        
        
        
    ];
    
    const arrMedia = [
        {
            src:"https://www.youtube.com/embed/Q1ijYhvaBZg",
            type: "iframe",
            desc: "Spotify Canva, Music, Mix & Master"
        },
        {
            src: "https://www.jqueryscript.net/dummy/1.mp4",
            type: "video",
            desc: "Video Description"
        },
        {
            src: "https://www.youtube.com/embed/KQUcvnFaNwM?si=DGjAiLeQc2yZoMgm",
            type: "iframe",
            desc: "40 MIN Intermediate Ashtanga Fire Flow"
        }
    ];

    const imageSectionContainer = $('.image-section');
    const videoSectionContainer = $('.video-section');
    const imageGallery = $('<div class="image-gallery"></div>');
    const videoGallery = $('<div class="video-gallery"></div>');
    const btnOpenMediaLightbox = $('#btn-open-media-lightbox');

    // Galería de imágenes
    $.each(arrImages, function(key, image){
        let imageSrc = image.src;

        let imageLink = $(`
            <a class="thumbnail-box gallery-images" href="${imageSrc}">
                <img src="${imageSrc}" alt="gallery-img_${key}" loading="lazy"/>
            </a>`);

        imageLink.on('click', function(e){
            e.preventDefault();
            e.stopImmediatePropagation();
            imageLightbox(arrImages, key);
        });

        imageGallery.append(imageLink);
        imageSectionContainer.append(imageGallery);
    });

    // Galería de videos
    $.each(arrVideos, function(key, video){
        let videoSrc = video.src;
        let videoThumbnail = video.thumbnail;

        // Usar thumbnail en lugar de video como miniatura
        let videoLink = $(`
            <a class="thumbnail-box gallery-videos" href="${videoSrc}">
                <img src="${videoThumbnail}" alt="Video thumbnail ${key + 1}" class="miniaturas video-thumbnail">
            </a>`);

        videoLink.on('click', function(e){
            e.preventDefault(); // Evitar abrir el enlace por defecto
            e.stopImmediatePropagation();

            // Abre el lightbox para reproducir el video
            videoLightbox(arrVideos, key);
        });

        videoGallery.append(videoLink);
        videoSectionContainer.append(videoGallery);
    });

    // Botón para abrir la galería de medios
    btnOpenMediaLightbox.on('click', function(){
        mediaLightbox(arrMedia);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Configuración del primer IntersectionObserver para la entrada del elemento
    const observerIn = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Agrega la clase visible al entrar en el viewport
            }
        });
    }, { threshold: 0.2 }); // Umbral para la entrada (10% visible)

    // Configuración del segundo IntersectionObserver para la salida del elemento
    const observerOut = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                entry.target.classList.remove('visible'); // Quita la clase visible al salir del viewport
            }
        });
    }, { threshold: 0.2 }); // Umbral para la salida (90% fuera de la vista)

    // Función para observar los elementos nuevos
    const observeThumbnails = () => {
        const videoThumbnails = document.querySelectorAll('.video-thumbnail:not(.observed)');
        videoThumbnails.forEach(thumbnail => {
            // Observa el elemento para la entrada
            observerIn.observe(thumbnail);
            // Observa el elemento para la salida
            observerOut.observe(thumbnail);
            thumbnail.classList.add('observed'); // Marca el elemento como observado
        });
    };

    // Detecta cambios en el DOM con MutationObserver
    const mutationObserver = new MutationObserver(observeThumbnails);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Observa los elementos iniciales (por si ya hay algunos en el DOM)
    observeThumbnails();
});



 document.addEventListener('DOMContentLoaded', () => {
  const buttonElement = document.querySelector('.width1');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(buttonElement);
});

document.addEventListener('DOMContentLoaded', () => {
  const buttonElement = document.querySelector('.width2');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(buttonElement);
});

document.addEventListener('DOMContentLoaded', () => {
  const buttonElement = document.querySelector('.width3');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(buttonElement);
});

document.addEventListener('DOMContentLoaded', () => {
  const buttonElement = document.querySelector('.width4');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(buttonElement);
});

document.addEventListener('DOMContentLoaded', () => {
  const buttonElement = document.querySelector('.width5');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(buttonElement);
});

document.addEventListener('DOMContentLoaded', () => {
  const buttonElement = document.querySelector('.width6');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(buttonElement);
});

document.addEventListener('DOMContentLoaded', () => {
  const buttonElement = document.querySelector('.width7');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(buttonElement);
});

// document.addEventListener('DOMContentLoaded', () => {
//   // Función para configurar el reproductor de audio
//   const setupAudioPlayer = (playButtonId, progressBarId, audioId, playIconPath, pauseIconPath) => {
//     const playButton = document.getElementById(playButtonId);
//     const progressBar = document.getElementById(progressBarId);
//     const audio = document.getElementById(audioId);
//     const icon = playButton.querySelector('img');

//     // Evento cuando el botón de reproducción es clickeado
//     playButton.addEventListener('click', () => {
//       if (audio.paused) {
//         audio.play();
//         icon.src = pauseIconPath;  // Cambia al ícono de pausa
//       } else {
//         audio.pause();
//         icon.src = playIconPath;  // Cambia al ícono de play
//       }
//     });

//     // Actualización del progreso
//     audio.addEventListener('timeupdate', () => {
//       // Calculamos el progreso actual de la canción en porcentaje
//       const progress = (audio.currentTime / audio.duration) * 100;
//       progressBar.style.width = `${progress}%`;  // Actualizamos la barra de progreso
//     });

//     // Evento cuando el audio termina
//     audio.addEventListener('ended', () => {
//       icon.src = playIconPath;  // Cambia al ícono de play cuando se termine el audio
//       progressBar.style.width = '0%';  // Resetea la barra de progreso
//     });

//     // Hacer que la barra de progreso sea clickeable para ir a cualquier parte de la canción
//     progressBar.addEventListener('click', (e) => {
//       // Análisis de la posición del clic dentro de la barra
//       const progressBarWidth = progressBar.offsetWidth;  // Obtener el ancho de la barra
//       const clickX = e.offsetX;  // Obtener la posición donde se hizo clic en la barra

//       // Asegurémonos de que la duración del audio sea válida
//       if (!isNaN(audio.duration) && audio.duration > 0) {
//         // Calculamos el nuevo tiempo con base en la posición del clic
//         const newTime = (clickX / progressBarWidth) * audio.duration;
//         audio.currentTime = newTime;  // Establecemos la nueva posición del audio
//         console.log(`Nuevo tiempo: ${newTime} segundos`);  // Depuración
//       } else {
//         console.log('Duración no válida');  // Depuración si hay un problema con la duración
//       }
//     });
//   };

//   // Configuración de los tres reproductores de audio
//   setupAudioPlayer('play-button1', 'progress-bar1', 'audio1', 'mixed-media-gallery/play.svg', 'mixed-media-gallery/pause.svg');
//   setupAudioPlayer('play-button2', 'progress-bar2', 'audio2', 'mixed-media-gallery/play.svg', 'mixed-media-gallery/pause.svg');
//   setupAudioPlayer('play-button3', 'progress-bar3', 'audio3', 'mixed-media-gallery/play.svg', 'mixed-media-gallery/pause.svg');
// });








