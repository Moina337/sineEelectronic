    // IntersectionObserver pour fadeInUp
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
         
        }else {
      // Retirer la classe quand l'élément sort de la vue
      entry.target.classList.remove('visible');
    }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll(".animate-fadeInUp").forEach(el => observer.observe(el));