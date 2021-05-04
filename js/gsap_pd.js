gsap . config ({ nullTargetWarn : false });
      
// Linea novel - anim
  gsap.set('#clock', {rotation:-50});

  const novel = gsap.utils.toArray('.anim_novel');
  novel.forEach(anim_novel => {
      gsap.to("#tapa_novel", { 
        duration:1,
        y:-1500,
        scrollTrigger: {
          trigger: anim_novel,
          toggleActions: "play pause resume",
          scrub: true
        }
      }),
        gsap.to("#clock", { 
          duration: 1,
          rotation:0,
          scrollTrigger: {
            trigger: anim_novel,
            toggleActions: "play pause resume",
            scrub: true
          }
        })/*,
        gsap.to("#novel_tapa_s03pd", { 
          duration: 1,
          y:-200,
          scrollTrigger: {
            trigger: anim_novel,
            toggleActions: "play pause resume",
            scrub: true
          }
        })*/
    });
    const novel_s3 = gsap.utils.toArray('.anim_novel_s3');
    novel_s3.forEach(anim_novel_s3 => {
        gsap.to("#novel_tapa_s03pd", { 
          duration: 1,
          y:-200,
          scrollTrigger: {
            trigger: anim_novel_s3,
            toggleActions: "play pause resume",
            scrub: true
          }
        })
    });


    gsap.set('#gradient_novel', {autoAlpha: 0,y:-200});
    gsap.set('#tira_novel', {x:-200});
    gsap.set('#olla2_novel', {y:50,rotationY:-10, rotationZ:-2});

    const novel_v2 = gsap.utils.toArray('.anim_novel_v2');
    novel_v2.forEach(anim_novel_v2 => {
        gsap.to("#gradient_novel", { 
          duration: 1,
          y:0,
          autoAlpha: 1,
          scrollTrigger: {
            trigger: anim_novel_v2,
            toggleActions: "play pause resume reset",
            scrub: false
          }
        }),
        gsap.to("#tira_novel", { 
          duration: 2,
          x:0,
          scrollTrigger: {
            trigger: anim_novel_v2,
            toggleActions: "play pause resume reset",
            scrub: false
          }
        }),
        gsap.to("#olla2_novel", { 
          duration: 2,
          y:0,
          rotationY:10,
          rotationZ:0,
          scrollTrigger: {
            trigger: anim_novel_v2,
            toggleActions: "play pause resume reset",
            scrub: false
          }
        })
    });
   
// Linea Innove - anim
  $(document).ready(function(){
    $('[id*="btn_"]').on('click touch', function(){
        var index = $(this).attr('id').split('_')[1];
        var elem = $('[id^="tapa_'+index+'"]');
        
        if(elem.css('visibility') == 'hidden'){
          $('[id^="tapa_"]').not(elem).css({'visibility':'hidden', 'opacity': '0'});
            elem.css({'visibility':'visible', 'opacity': '1'});
          }else{
            elem.css({'visibility':'hidden', 'opacity': '0'}); 
          }      
      });
    
    });
  

    gsap.set('#intro_t_innove', {y:350,x:-450, scale:0.7});
    gsap.set('#food_innove', {y:200,x:-200, scale:0.7,autoAlpha: 1});
    gsap.set('#innove_olla_s03pd', {y:150,x:-50, scale:0.5});
    gsap.set('#render_innove_s05pd', {y:100,x:300, scale:0.6});
    gsap.set('#section06_innove', {autoAlpha: 0});

    const innove = gsap.utils.toArray('.anim_innove');
    innove.forEach(anim_innove => {
        gsap.to("#intro_t_innove", { 
          duration:1,
          y:-350,
          x:450,
          scale:1,
          delay:-2,
          scrollTrigger: {
            trigger: anim_innove,
            toggleActions: "play pause resume",
            scrub: true
          }
        }),
        gsap.to("#food_innove", { 
          duration:1,
          y:-200,
          x:200,
          scale:1,
          autoAlpha:1,
          scrollTrigger: {
            trigger: anim_innove,
            toggleActions: "play pause resume",
            scrub: true
          }
        }),
        gsap.to("#brocoli_innove", { 
          duration:1,
          y:60,
          x:500,
          scale:0.1,
          rotation: 80,
          scrollTrigger: {
            trigger: anim_innove,
            toggleActions: "play pause resume",
            scrub: true
          }
        }),
        gsap.to("#innove_olla_s03pd", { 
          duration:1,
          y:-150,
          x:0,
          scale:1.2,
          autoAlpha:1,
          scrollTrigger: {
            trigger: anim_innove,
            toggleActions: "play pause resume",
            scrub: true
          }
        }),
        gsap.to("#render_innove_s05pd", { 
          duration:1,
          y:-20,
          x:0,
          scale:0.9,
          autoAlpha:1,
          scrollTrigger: {
            trigger: anim_innove,
            toggleActions: "play pause resume",
            scrub: true
          }
        }),
        gsap.to("#section06_innove", { 
          duration: 2,
          autoAlpha:1,
          scrollTrigger: {
            trigger: anim_innove,
            toggleActions: "play pause resume reset",
            scrub: false
          }
        })
      });

// 5Capas - anim
    gsap.set('#intro_t_5capas', {y:230,scale:1});
    gsap.set('[id*="broccoli"],[id*="carrot"],[id*="repollito"], #morron_5capas', {y:230,scale:1.1, autoAlpha:1});
    gsap.set('.line-5capas , .number-5capas', {x:-200,scale:0.5, autoAlpha:0});
    gsap.set('.img-s03pd-5capas , #capas_olla_s03pd', {scale:0.8, autoAlpha:0});

      const capas5 = gsap.utils.toArray('.anim_capas5');
      capas5.forEach(anim_capas5 => {
          gsap.to("#intro_t_5capas", { 
            duration:1,
            y:-450,
            scale:1.1,
            scrollTrigger: {
              trigger: anim_capas5,
              toggleActions: "play pause resume",
              scrub: true
            }
          }),
          gsap.to('#broccoli1_5capas', { 
            duration: 1,
            autoAlpha:1,
            y:-400,
            x:100,
            scale:1,
            scrollTrigger: {
              trigger: anim_capas5,
              toggleActions: "play pause resume reset",
              scrub: true
            }
          }),
          gsap.to('#broccoli2_5capas', { 
            duration: 1,
            autoAlpha:1,
            rotation:270,
            scale:0.9,
            y:-550,
            x:800,
            scrollTrigger: {
              trigger: anim_capas5,
              toggleActions: "play pause resume reset",
              scrub: true
            }
          }),
          gsap.to('#carrot1_5capas', { 
            duration: 1,
            autoAlpha:1,
            rotation:420,
            scale:1,
            y:-270,
            x:320,
            scrollTrigger: {
              trigger: anim_capas5,
              toggleActions: "play pause resume reset",
              scrub: true
            }
          }),
          gsap.to('#carrot2_5capas', { 
            duration: 1,
            autoAlpha:1,
            rotation:270,
            scale:0.8,
            y:-550,
            x:-600,
            scrollTrigger: {
              trigger: anim_capas5,
              toggleActions: "play pause resume reset",
              scrub: true
            }
          }),
          gsap.to('#morron_5capas', { 
            duration: 1,
            autoAlpha:1,
            rotation:270,
            scale:1.1,
            y:-250,
            x:-50,
            scrollTrigger: {
              trigger: anim_capas5,
              toggleActions: "play pause resume reset",
              scrub: true
            }
          }),
          gsap.to('#repollito1_5capas', { 
            duration: 1,
            autoAlpha:1,
            rotation:170,
            scale:1,
            y:-150,
            x:-300,
            scrollTrigger: {
              trigger: anim_capas5,
              toggleActions: "play pause resume reset",
              scrub: true
            }
          }),
          gsap.to('#repollito2_5capas', { 
            duration: 1,
            autoAlpha:1,
            rotation:170,
            scale:0.7,
            y:-400,
            x:250,
            scrollTrigger: {
              trigger: anim_capas5,
              toggleActions: "play pause resume reset",
              scrub: true
            }
          })
        });

        const capas5_v2 = gsap.utils.toArray('.anim_capas5_v2');
      capas5_v2.forEach(anim_capas5_v2 => {
          gsap.to(".line-5capas", { 
            duration:2,
            x:0,
            scale:1.1,
            autoAlpha : 1,
            ease: Expo.easeInOut,
            scrollTrigger: {
              trigger: anim_capas5_v2,
              toggleActions: "play pause resume reset",
              scrub: false
            }
          }),
          gsap.to(".number-5capas", { 
            duration:2,
            x:0,
            scale:1.1,
            autoAlpha : 1,
            delay:0.1,
            ease: Expo.easeInOut,
            scrollTrigger: {
              trigger: anim_capas5_v2,
              toggleActions: "play pause resume reset",
              scrub: false
            }
          }),
          gsap.to(".img-s03pd-5capas , #capas_olla_s03pd ", { 
            duration:2,
            scale:1,
            autoAlpha : 1,
            ease: Expo.easeInOut,
            scrollTrigger: {
              trigger: anim_capas5_v2,
              toggleActions: "play pause resume reset",
              scrub: false
            }
          })
        });
        const capas5_v3 = gsap.utils.toArray('.anim_capas5_v3');
      capas5_v3.forEach(anim_capas5_v3 => {
          gsap.to(".img-s03pd-5capas , #capas_olla_s03pd ", { 
            duration:2,
            scale:1,
            autoAlpha : 1,
            ease: Expo.easeInOut,
            scrollTrigger: {
              trigger: anim_capas5_v3,
              toggleActions: "play pause resume reset",
              scrub: false
            }
          })
        });

// Presion Cooker - anim

  gsap.set('#olla1_presion_s02pd', {x:-450, scale:0.8});
  gsap.set('#olla2_presion_s02pd', {x:-200, scale:0.8,});

  const presion = gsap.utils.toArray('.anim_presion');
  presion.forEach(anim_presion => {
      gsap.to("#olla1_presion_s02pd", { 
        duration:1,
        x:550,
        scale:1,
        scrollTrigger: {
          trigger: anim_presion,
          toggleActions: "play pause resume",
          scrub: true
        }
      }),
      gsap.to("#olla2_presion_s02pd", { 
        duration: 1,
        x:300,
        scale:1,
        scrollTrigger: {
          trigger: anim_presion,
          toggleActions: "play pause resume reset",
          scrub: true
        }
      }),
      gsap.to("#tapa_presion_s04pd", { 
        duration: 1,
        x:300,
        y:-100,
        scale:1,
        rotation:120,
        scrollTrigger: {
          trigger: anim_presion,
          toggleActions: "play pause resume reset",
          scrub: true
        }
      }),
      gsap.to("#olla_presion_s04pd", { 
        duration: 1,
        x:-50,
        scale:0.9,
        scrollTrigger: {
          trigger: anim_presion,
          toggleActions: "play pause resume reset",
          scrub: true
        }
      })
    });

    gsap.set('#head_presion_s05pd , #olla_presion_s05pd', {autoAlpha:0});

    const presion_v2 = gsap.utils.toArray('.anim_presion_v2');
    presion_v2.forEach(anim_presion => {
      gsap.to("#head_presion_s05pd", { 
        duration:2,
        autoAlpha:1,
        scrollTrigger: {
          trigger: anim_presion,
          toggleActions: "play pause resume reset",
          scrub: false
        }
      }),
      gsap.to("#olla_presion_s05pd", { 
        duration:2,
        autoAlpha:1,
        scrollTrigger: {
          trigger: anim_presion,
          toggleActions: "play pause resume reset",
          scrub: false
        }
      })
    });

// Easy Release - anim

    gsap.set('#pancacke_s02pd', {scale:2,rotationY:180});
    gsap.set('#sarten_s02pd', {scale:0.8});

    const anim_easy_v2 = gsap.utils.toArray('.anim_easy_v2');
    anim_easy_v2.forEach(anim_easy_v2 => {
      gsap.to("#pancacke_s02pd", { 
        duration:1,
        delay:0.5,
        scale:1,
        rotationY:0,
        scrollTrigger: {
          trigger: anim_easy_v2,
          toggleActions: "play pause resume reset",
          scrub: false
        }
      }),
      gsap.to("#sarten_s02pd", { 
        duration:1,
        delay:0.5,
        scale:1,
        rotation:-10,
        scrollTrigger: {
          trigger: anim_easy_v2,
          toggleActions: "play pause resume reset",
          scrub: false
        }
      }),
      gsap.to("#mermelada_s02pd", { 
        duration:1,
        x:-20,
        rotation:-5,
        scrollTrigger: {
          trigger: anim_easy_v2,
          toggleActions: "play pause resume reset",
          scrub: false
        }
      }),
      gsap.to("#miel_s02pd", { 
        duration:1,
        x:20,
        rotation:5,
        scrollTrigger: {
          trigger: anim_easy_v2,
          toggleActions: "play pause resume reset",
          scrub: false
        }
      }),
      gsap.to("#easy1_s03pd", { 
        duration:1,
        x:20,
        y:-100,
        scale:1.2,
        rotation:-50,
        scrollTrigger: {
          trigger: anim_easy_v2,
          toggleActions: "play pause resume reset",
          scrub: false
        }
      })
    });

  const anim_easy_v3 = gsap.utils.toArray('.anim_easy_v3');
  anim_easy_v3.forEach(anim_easy_v3 => {
      gsap.to("#easy1_s03pd", { 
        duration:1,
        x:20,
        y:-100,
        scale:1.2,
        rotation:-100,
        scrollTrigger: {
          trigger: anim_easy_v3,
          toggleActions: "play pause resume reset",
          scrub: false
        }
      }),gsap.to("#easy2_s03pd", { 
        duration:1,
        x:20,
        y:-100,
        scale:1.2,
        rotation:-80,
        scrollTrigger: {
          trigger: anim_easy_v3,
          toggleActions: "play pause resume reset",
          scrub: false
        }
      }),
      gsap.to("#easy3_s03pd", { 
        duration:1,
        x:20,
        y:-100,
        scale:1.2,
        rotation:-60,
        scrollTrigger: {
          trigger: anim_easy_v3,
          toggleActions: "play pause resume reset",
          scrub: false
        }
      })
    });

    gsap.set('#hotcake-easy-s04pd , #milanesa-easy-s04pd , #huevo-easy-s04pd ', {x:-500, autoAlpha:0});

    const anim_easy_v4 = gsap.utils.toArray('.anim_easy_v4');
      anim_easy_v4.forEach(anim_easy_v4 => {
      gsap.to("#hotcake-easy-s04pd , #milanesa-easy-s04pd , #huevo-easy-s04pd", { 
        duration:1,
        delay:0.5,
        x:0,
        autoAlpha:1,
        scrollTrigger: {
          trigger: anim_easy_v4,
          toggleActions: "play pause resume reset",
          scrub: false
        }
      })
    });

  //gsap.set('.cont-img-s05pd , .head-s05pd', {autoAlpha:0});

  const anim_easy_v5 = gsap.utils.toArray('.anim_easy_v5');
  anim_easy_v5.forEach(anim_easy_v5 => {
    gsap.to(".cont-img-s05pd , .head-s05pd", {
      autoAlpha:1,
      scrollTrigger: {
        trigger: anim_easy_v5,
        toggleActions: "play pause resume reset",
        scrub: false
      }
    })
  });                         

// Extractor de jugos - anim

const extractor = gsap.utils.toArray('.anim_extractor');
extractor.forEach(anim_extractor => {
    gsap.to("#orange_1_s02pd", { 
      duration:1,
      x:650,
      y:100,
      scale:1.2,
      rotation:50,
      scrollTrigger: {
        trigger: anim_extractor,
        toggleActions: "play pause resume",
        scrub: true
      }
    }),
    gsap.to("#orange_2_s02pd", { 
      duration:1,
      x:-450,
      scale:1.2,
      rotation:-150,
      scrollTrigger: {
        trigger: anim_extractor,
        toggleActions: "play pause resume",
        scrub: true
      }
    }),
    gsap.to("#orange_3_s02pd", { 
      duration:1,
      x:900,
      y:-200,
      scale:1,
      rotation:250,
      scrollTrigger: {
        trigger: anim_extractor,
        toggleActions: "play pause resume",
        scrub: true
      }
    }),
    gsap.to("#mint_1_s02pd", { 
      duration:1,
      x:300,
      y:400,
      scale:1.1,
      rotation:50,
      scrollTrigger: {
        trigger: anim_extractor,
        toggleActions: "play pause resume",
        scrub: true
      }
    }),
    gsap.to("#mint_2_s02pd", { 
      duration:1,
      x:-200,
      y:550,
      scale:1.1,
      rotation:-100,
      scrollTrigger: {
        trigger: anim_extractor,
        toggleActions: "play pause resume",
        scrub: true
      }
    }),
    gsap.to("#blueberry_1_s02pd", { 
      duration:1,
      x:-500,
      y:400,
      scale:0.8,
      rotation:120,
      scrollTrigger: {
        trigger: anim_extractor,
        toggleActions: "play pause resume",
        scrub: true
      }
    }),
    gsap.to("#blueberry_2_s02pd", { 
      duration:1,
      x:200,
      y:0,
      scale:0.6,
      rotation:50,
      scrollTrigger: {
        trigger: anim_extractor,
        toggleActions: "play pause resume",
        scrub: true
      }
    }),
    gsap.to("#blueberry_3_s02pd", { 
      duration:1,
      x:-900,
      y:-300,
      scale:0.6,
      rotation:300,
      scrollTrigger: {
        trigger: anim_extractor,
        toggleActions: "play pause resume",
        scrub: true
      }
    })
  });

  gsap.set('#part_extractor_s02pd', {autoAlpha:0});

  const anim_extractor_v2 = gsap.utils.toArray('.anim_extractor_v2');
  anim_extractor_v2.forEach(anim_extractor_v2 => {
    gsap.to("#part_extractor_s02pd", { 
      duration:2,
      autoAlpha:1,
      scrollTrigger: {
        trigger: anim_extractor_v2,
        toggleActions: "play pause resume reset",
        scrub: false
      }
    })
  });

    var mediaqueryList = window.matchMedia("(max-width: 600px)");
    if(mediaqueryList.matches) {
      positionX= 4;
      console.log(positionX);
    }else{
      positionX=1;
      console.log(positionX);
    }
  const extractor_v3 = gsap.utils.toArray('.anim_extractor_v3');
  extractor_v3.forEach(anim_extractor_v3 => {
      gsap.to("#apio_1_s02pd", { 
        duration:1,
        x:650 / positionX,
        y:100,
        scale:1.2,
        rotation:50,
        scrollTrigger: {
          trigger: anim_extractor_v3,
          toggleActions: "play pause resume",
          scrub: true
        }
      }),
      gsap.to("#apio_2_s02pd", { 
        duration:1,
        x:-450 / positionX,
        scale:1.2,
        rotation:-150,
        scrollTrigger: {
          trigger: anim_extractor_v3,
          toggleActions: "play pause resume",
          scrub: true
        }
      }),
      gsap.to("#pepino_1_s02pd", { 
        duration:1,
        x:900 / positionX,
        y:-200,
        scale:1,
        rotation:250,
        scrollTrigger: {
          trigger: anim_extractor_v3,
          toggleActions: "play pause resume",
          scrub: true
        }
      }),
      gsap.to("#pepino_2_s02pd", { 
        duration:1,
        x:300 / positionX,
        y:350,
        scale:1.1,
        rotation:50,
        scrollTrigger: {
          trigger: anim_extractor_v3,
          toggleActions: "play pause resume",
          scrub: true
        }
      }),
      gsap.to("#pepino_3_s02pd", { 
        duration:1,
        x:-200 / positionX,
        y:350,
        scale:1.1,
        rotation:-100,
        scrollTrigger: {
          trigger: anim_extractor_v3,
          toggleActions: "play pause resume",
          scrub: true
        }
      }),
      gsap.to("#pepino_4_s02pd", { 
        duration:1,
        x:-500 / positionX,
        y:400,
        scale:0.8,
        rotation:120,
        scrollTrigger: {
          trigger: anim_extractor_v3,
          toggleActions: "play pause resume",
          scrub: true
        }
      })
    });
    
    gsap.set('#torpedo_extractor_s03pd', {autoAlpha:0});
    const anim_extractor_v4 = gsap.utils.toArray('.anim_extractor_v4');
    anim_extractor_v4.forEach(anim_extractor_v4 => {
      gsap.to("#torpedo_extractor_s03pd", { 
        duration:2,
        autoAlpha:1,
        scrollTrigger: {
          trigger: anim_extractor_v4,
          toggleActions: "play pause resume reset",
          scrub: false
        }
      })
    });
/*General Overs*/
    $('[id*="over_"]').on('mouseenter', function(){
      var index = $(this).attr('id').split('_')[1];
      var elem = $('[id^="over_'+index+'"]');
      var index2 = $(elem).attr('id').split('_')[1];
        if(index === index2){
           elem.css({'background':'#002270'});
           $(elem).find('.copete-s11pd , .title-s11pd , .txt-s11pd').css({'color':'#fff'});
           $(elem).find('.title-s11pd , .txt-s11pd').css({'color':'#fff'});
           }else{
              elem.css({'background':'transparent'}); 
           }      
      });

      $('[id*="over_"]').on('mouseleave', function(){
        var index = $(this).attr('id').split('_')[1];
        var elem = $('[id^="over_'+index+'"]');
        var index2 = $(elem).attr('id').split('_')[1];
              
         if(index === index2){
            elem.css({'background':'transparent'});
            $(elem).find('.copete-s11pd').css({'color':'#002270'});
            $(elem).find('.title-s11pd , .txt-s11pd').css({'color':'black'});
                }else{
                  elem.css({'background':'red'}); 
                }      
          });
