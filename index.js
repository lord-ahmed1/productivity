// document.querySelector('.title').innerText='hi'
// $('.top').animate({marginTop :'40%'},2000)
date= new Date()
weekdays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
console.log();
$('.date').text(date.toDateString())
$('.date').css('fontSize','2rem')
day=date.getUTCDay()
if(day%2 == 0){title='physics';$('.title').text('physics')}
else{title='math'
  $('.title').text(title);
}
function booksAppear(array,title){
  $('.subjects').html('')
  tags=''
  array.forEach(function(item){
    name=item.substring(0,50)
    tags=tags+'<a class="link-warning" href="university/'+title+'/'+item+'" target="_blank">'+name+'</a><br>'
  })
  tags=tags+'<button class="refresh btn btn-dark" >return back</button>'
$('.container').html(tags)
$('.refresh').on("click",function(){location.reload()})

}

$('.container').animate({marginTop:0},5000)

$('.books').on("click",function(){
  switch (title) {
    case'physics':
      booksAppear(physicsBooks,title)
      break;

      case 'math':
      booksAppear(mathBooks,title)
        break;


        case 'cs':
        booksAppear(csBooks,title)
          break;


          case 'electronics':
          booksAppear(electronicsBooks,title)
            break;
    default:
  }
})


function separate(array){
  tog=0
  names=[]
  links=[]
  array.forEach(function(item){
    if(tog==0){links.push(item);tog=1}
    else{names.push(item);tog=0}
  })
  return [names,links]
}

function videosAppear(array,title){
  $('.subjects').html('')
  tags=''
  data=separate(array)
  names=data[0]
  links=data[1]
  for (var i=0;i<names.length;i++){
  tags=tags+'<a href="'+links[i]+'" target="_blank " class="link-warning">'+names[i].substring(0,50)+'</a><br>'

  }

  tags=tags+'<button class="refresh btn btn-dark" >return back</button>'
$('.container').html(tags)
$('.refresh').on("click",function(){location.reload()})

}

menuList=$('.subject_menu')
menuList.on('click',function(){title=jQuery(this).text();$('.title').text(title)})


$('.videos').on("click",function(){
  switch (title) {
    case'physics':
      videosAppear(physicsLinks,title)
      break;

      case 'math':
      videosAppear(mathLinks,title)
        break;

        case 'cs':
        videosAppear(csLinks,title)
          break;

          case 'electronics':
          videosAppear(electronicsLinks,title)
            break;
    default:
  }
})




mathBooks=['A first course in the calculus of variations by Mark Kot (z-lib.org).pdf', 'Calculus of Variations by Filip Rindler (z-lib.org).pdf', 'Differential Equations and Linear Algebra (Gilbert Strang) (z-lib.org).pdf', 'Fourier and Laplace transforms by R. J. Beerends, H. G. ter Morsche, J. C. van den Berg, E. M. van de Vrie (z-lib.org).pdf', 'Generating Functionology (Herbert S. Wilf (Auth.)) (z-lib.org).pdf', 'Handbook of fractional calculus with applications Volume 3, Numerical methods (Karniadakis, George) (z-lib.org).pdf', 'Introduction to Linear Algebra, Fifth Edition (Gilbert Strang) (z-lib.org).pdf', 'Linear Algebra and Learning from Data (Gilbert Strang) (z-lib.org).pdf', 'Linear Algebra and Matrix Theory (Jimmie Gilbert and Linda Gilbert (Auth.)) (z-lib.org).pdf', 'Linear algebra, geodesy, and GPS (Gilbert Strang, Kai Borre) (z-lib.org).pdf', 'Manifolds, Tensors and Forms by Renteln P. (z-lib.org).pdf', 'Matrix Methods and Fractional Calculus by Arak M Mathai, Hans J Haubold (z-lib.org).pdf', 'Multivariable Calculus with MATLAB® With Applications to Geometry and Physics by Ronald L. Lipsman, Jonathan M. Rosenberg (z-lib.org).pdf', 'Textbook Of Tensor Calculus And Differential Geometry by Prasun Kumar Nayak (z-lib.org).pdf', 'The Golden Ratio The Story of PHI, the Worlds Most Astonishing Number by Mario Livio (z-lib.org).pdf', 'Vector Calculus (Susan Jane Colley) (z-lib.org).pdf']
physicsBooks=['A First Course in String Theory by Barton Zwiebach (z-lib.org).pdf', 'a modern approach to quantum physics.pdf', 'Cambridge International AS  A Level Physics Coursebook with Digital Access (2 Years) by David Sang, Graham Jones, Gurinder Chadha, Richard Woodside (z-lib.org).pdf', 'Foundations of Perturbative QCD by John Collins (z-lib.org).pdf', 'From Special Relativity to Feynman Diagrams A Course of Theoretical Particle Physics for Beginners (Riccardo DAuria, Mario Trigiante (auth.)) (z-lib.org).pdf', 'Gravity  an introduction to Einsteins general relativity (J  B Hartle) (z-lib.org).pdf', 'Gravity, Black Holes, and the Very Early Universe An Introduction to General Relativity and Cosmology (Tai L. Chow) (z-lib.org).pdf', 'Introduction to Electrodynamics by David J. Griffiths (z-lib.org).pdf', 'Introduction to elementary particles by David Griffiths (z-lib.org).pdf', 'Introduction to Quantum Mechanics by David J. Griffiths, Darrell F. Schroeter (z-lib.org) (1).pdf', 'Lectures on general relativity by Carroll S. (z-lib.org).pdf', 'Modern Quantum Mechanics (Jun John Sakurai, Jim Napolitano) (z-lib.org).pdf', 'Photon-hadron Interactions by Richard P. Feynman (z-lib.org).pdf', 'Practical Quantum Computing for Developers Programming Quantum Rigs in the Cloud using Python, Quantum Assembly Language and... (Vladimir Silva) (z-lib.org).pdf', 'Quantum Chemistry (John P. Lowe, Kirk A. Peterson) (z-lib.org).pdf', 'Relativity The Special and the General Theory by Albert Einstein, Roger Penrose, Robert Geroch, David C. Cassidy (z-lib.org).pdf', 'Six Not-So-Easy Pieces Einsteins Relativity, Symmetry, and Space-Time (Richard P. Feynman, Robert B. Leighton etc.) (z-lib.org).pdf', 'solutions-of-quantum-mechanics-by-griffith.pdf', 'Solutions’ Manual for Introduction to Linear Algebra, Fifth Edition (Gilbert Strang) (z-lib.org).pdf', 'Spacetime and Geometry An Introduction to General Relativity (Sean Carroll) (z-lib.org).pdf', 'Special Relativity For the Enthusiastic Beginner (David J Morin) (z-lib.org).pdf', 'The Noether Theorems Invariance and Conservation Laws in the Twentieth Century ( etc.) (z-lib.org).pdf', 'The Quantum Mechanics Solver How to Apply Quantum Theory to Modern Physics by Jean-Louis Basdevant, Jean Dalibard (z-lib.org).pdf']
electronicsBooks=['Fundamentals of RF Circuit Design with Low Noise Oscillators by Jeremy Everard (z-lib.org).pdf',  'The ARRL Handbook for Radio Communications 2019 by ARRL Inc (z-lib.org).pdf']
csBooks=['Introduction to Machine Learning with Python A Guide for Data Scientists by Andreas C. Müller, Sarah Guido (z-lib.org).pdf', 'JavaScript and JQuery Interactive Front-End Web Development (Jon Duckett) (z-lib.org).pdf', 'Learning Web Design - A Beginner’s Guide to HTML, CSS, JavaScript, and Web Graphics by Jennifer Niederst Robbins (z-lib.org).pdf', 'Practical Web Scraping for Data Science Best Practices and Examples with Python by Seppe vanden Broucke, Bart Baesens (z-lib.org).pdf', 'Python Artificial Intelligence Projects for Beginners - Get up and running with 8 smart and exciting AI applications by Joshua Eckroth (z-lib.org).pdf', 'Web development and design foundations with HTML5 (Terry Felke-Morris) (z-lib.org).pdf', 'Web Scraping with Python Collecting More Data from the Modern Web by Ryan Mitchell (z-lib.org).pdf']



mathLinks=['https://www.youtube.com/playlist?list=PL221E2BBF13BECF6C','MIT 18.06SC Linear Algebra, Fall 2011','https://www.youtube.com/playlist?list=PLUl4u3cNGP63micsJp_--fRAjZXPrQzW_','MIT 18.102 Introduction to Functional Analysis, Spring 2021','https://www.youtube.com/playlist?list=PLFFA35EF8CECBA074','Mathematical Modelling MIT','https://www.youtube.com/playlist?list=PLUl4u3cNGP61O7HkcF7UImpM0cR_L2gSw','MIT 18.100A Real Analysis, Fall 2020','https://www.youtube.com/playlist?list=PL71JUoXcec_mmLm9psjMKo1FYBXS9WHb7','Complex Analysis Math 372 - Steven Miller','https://www.youtube.com/playlist?list=PLB24BC7956EE040CD','Lecture Collection | The Fourier Transforms and Its Applications','https://www.youtube.com/playlist?list=PLUl4u3cNGP63oTpyxCMLKt_JmB0WtSZfG','MIT Learn Differential Equations','https://www.youtube.com/playlist?list=PLUl4u3cNGP63oMNUHXqIUcrkS2PivhN3k','MIT 18.065 Matrix Methods in Data Analysis, Signal Processing','https://www.youtube.com/playlist?list=PLdgVBOaXkb9CD8igcUr9Fmn5WXLpE8ZE_','Calculus of Variations','https://www.youtube.com/playlist?list=PLB7540DEDD482705B','MIT 6.042J Mathematics for Computer Science, Fall 2010','https://www.youtube.com/playlist?list=PLSQl0a2vh4HC5feHa6Rc5c0wbRTx56nF7','Multivariable calculus','https://www.youtube.com/playlist?list=PL4C4C8A7D06566F38','MIT 18.02 Multivariable Calculus, Fall 2007','https://www.youtube.com/playlist?list=PLSuQRd4LfSUTmb_7IK7kAzxJtU2tpmEd3','New To Tensors? Start Here','https://www.youtube.com/playlist?list=PLdgVBOaXkb9D6zw47gsrtE5XqLeRPh27_','Tensor Calculus','https://www.youtube.com/playlist?list=PL19E79A0638C8D449','Calculus','https://www.youtube.com/playlist?list=PLUl4u3cNGP60uVBMaoNERc6knT_MgPKS0','MIT 18.650 Statistics for Applications, Fall 2016','https://www.youtube.com/playlist?list=PLUl4u3cNGP63B2lDhyKOsImI7FjCf6eDW','MIT 15.401 Finance Theory I, Fall 2008MIT OpenCourseWare']
physicsLinks=['https://www.youtube.com/playlist?list=PLyQSN7X0ro203puVhQsmCj9qhlFQ-As8e','8.01x - MIT Physics I: Classical Mechanics','https://www.youtube.com/playlist?list=PLyQSN7X0ro2314mKyUiOILaOC2hk6Pc3j','8.02x - MIT Physics II: Electricity and Magnetism','https://www.youtube.com/playlist?list=PLUdYlQf0_sSsdOhQ_8jfrAGzbGbJ7MXGe','8.03 Physics III: Vibrations and Waves, Fall 2004 (Complete Lectures by Walter Lewin)','https://www.youtube.com/playlist?list=PLUl4u3cNGP60cspQn3N9dYRPiyVWDd80G','MIT 8.04 Quantum Physics I, Spring 2016','https://www.youtube.com/playlist?list=PLUl4u3cNGP61-9PEhRognw5vryrSEVLPr','MIT 8.04 Quantum Physics I, Spring 2013 (2013)','https://www.youtube.com/playlist?list=PLUl4u3cNGP61R5sPDPKVfcFlu95wSs2Kx','MIT 8.03SC Physics III: Vibrations and Waves, Fall 2016','https://www.youtube.com/playlist?list=PLUl4u3cNGP61Bf9I0WDDriuDqEnywoxra','MIT 8.286 The Early Universe, Fall 2013','https://www.youtube.com/playlist?list=PLVVGq1Y3WDp2YKfn7jFtPQwxYy8YckaY6','Quantum chromodynamics','https://www.youtube.com/playlist?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR','📕 Introduction to Quantum Computing and Quantum Hardware','https://www.youtube.com/playlist?list=PLUl4u3cNGP61FVzAxBP09w2FMQgknTOqu','MIT 22.01 Introduction to Nuclear Engineering and Ionizing Radiation, Fall 2016','https://www.youtube.com/playlist?list=PLUl4u3cNGP629n_3fX7HmKKgin_rqGzbx','MIT 8.962 General Relativity, Spring 2020','https://www.youtube.com/playlist?list=PLaNkJORnlhZlVh7rwdGCRypcFqgV9JWUY','String Theory - Barton Zwiebach','https://www.youtube.com/playlist?list=PLXnsjPD8-xuusZCiPKxAirmifNKoOu45X','VLSI Technology','https://www.youtube.com/playlist?list=PLkpYqKNqc_Cud5sLg896FsnbkoQiHlkpZ','AleQCG - Introduction to Quantum Computing - مقدمة في الحاسبات الكمية']
electronicsLinks=['https://www.youtube.com/playlist?list=PL9B24A6A9D5754E70','MIT 6.01SC Introduction to EECS I','https://www.youtube.com/playlist?list=PL9F74AFA03AA06A11','MIT 6.002 Circuits and Electronics, Spring 2007','https://www.youtube.com/playlist?list=PLxjvtPyEgX2PdI2OtA_jM0hKu7h9PSQ80','دورة الالكترونيات العملية - للمهندس وليد عيسى']
csLinks=['https://www.youtube.com/playlist?list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb','MIT 6.006 Introduction to Algorithms, Fall 2011','https://www.youtube.com/playlist?list=PL3GeP3YLZn5ixsnIOIx9tB4v6s-rsw48X','Blender 3.0 Basics Course','https://www.youtube.com/playlist?list=PLsGl9GczcgBtK0EKjiHyM_86DIFrHocF1','Blender Complete Beginner Tutorial SeriesRyan King Art']
