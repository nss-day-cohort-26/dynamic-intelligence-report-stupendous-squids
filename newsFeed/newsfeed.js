function buildNewsFeed() {
  const mainPage = document.querySelector('#whole-page')
  while (mainPage.firstChild) {
    mainPage.removeChild(mainPage.firstChild);
  }

  // Create News Div
  const newsDiv = document.createElement('div')
  newsDiv.setAttribute('id', 'newsfeed')
  newsDiv.setAttribute('class', 'tabcontent')

  // Create page header

  const newsHead = document.createElement('h2')
  newsHead.setAttribute('id', 'news-head')
  newsHead.setAttribute('class', 'flux')
  newsHead.textContent = 'NEWS FEED'
  newsDiv.appendChild(newsHead)

  // Create News Buttons
  const btnOne = document.createElement('button')
  btnOne.setAttribute('class', 'news-collapsible')
  btnOne.classList.add('fluxbut')
  btnOne.textContent = "If Joker Is So Terrible, Why Don't Statistics Show It?"
  newsDiv.appendChild(btnOne)
  // Create content for button one and append
  const oneContent = document.createElement('div')
  oneContent.setAttribute('class', 'content') // changed from news-button-content
  // Newspaper stuff new test
  const oneCollumns = document.createElement('div')
  oneCollumns.setAttribute('class', 'collumns')
  oneContent.appendChild(oneCollumns) // append
  const one_one = document.createElement('div')
  one_one.setAttribute('class', 'collumn')
  oneCollumns.appendChild(one_one) // append
  const headOne = document.createElement('div')
  headOne.setAttribute('class', 'head')
  one_one.appendChild(headOne) // append
  const spanOne = document.createElement('span')
  spanOne.setAttribute('class', 'headline hl1')
  spanOne.textContent = "OLD MAN YELLS AT CLOUD"
  headOne.appendChild(spanOne) // append
  const pOne = document.createElement('p')
  const spanTwo = document.createElement('span')
  spanTwo.setAttribute('class', 'headline hl2')
  spanTwo.textContent = "OTHER THINGS PROBABLY ALSO HAPPENED"
  pOne.appendChild(spanTwo) // append
  headOne.appendChild(pOne) // append
  const pTwo = document.createElement('p')
  pTwo.textContent = "Lumbersexual +1 mixtape craft beer. Microdosing marfa cliche plaid, normcore narwhal pabst dreamcatcher VHS meh artisan freegan banjo. Retro cray meditation, dreamcatcher lomo enamel pin intelligentsia kombucha beard. Polaroid thundercats trust fund, keytar lo-fi pug green juice live-edge raclette heirloom tumblr tote bag unicorn fanny pack. "
  const figOne = document.createElement('figure')
  figOne.setAttribute('class', 'figure')
  const imgOne = document.createElement('img')
  imgOne.setAttribute('class', 'media')
  imgOne.setAttribute('src', 'https://media3.giphy.com/media/7XqRXKYV9odtm/giphy.gif')
  figOne.appendChild(imgOne)
  const pThree = document.createElement('p')
  pThree.textContent = "Subway tile chambray hella sriracha, cred celiac listicle man bun yuccie slow-carb humblebrag. Whatever green juice taxidermy, scenester succulents 8-bit kitsch butcher pop-up. Vaporware edison bulb pug venmo kogi small batch flexitarian activated charcoal fixie selvage."
  one_one.appendChild(pTwo) // append
  one_one.appendChild(figOne)
  one_one.appendChild(pThree) // append
  

  // second collumn try
  const one_two = document.createElement('div')
  one_two.setAttribute('class', 'collumn')
  oneCollumns.appendChild(one_two) // append
  const headOne2 = document.createElement('div')
  headOne2.setAttribute('class', 'head')
  one_two.appendChild(headOne2) // append
  const spanOne2 = document.createElement('span')
  spanOne2.setAttribute('class', 'headline hl1')
  spanOne2.textContent = "BATMOBILE LOSES WHEEL"
  headOne2.appendChild(spanOne2) // append
  const pOne2 = document.createElement('p')
  const spanTwo2 = document.createElement('span')
  spanTwo2.setAttribute('class', 'headline hl2')
  spanTwo2.textContent = "JOKER GETS AWAY"
  pOne2.appendChild(spanTwo2) // append
  headOne2.appendChild(pOne2) // append
  const pTwo2 = document.createElement('p')
  pTwo2.textContent = "Air plant butcher selfies glossier. Franzen affogato typewriter, shoreditch edison bulb street art trust fund retro godard quinoa. Selfies tofu letterpress, irony chartreuse you probably haven't heard of them meditation kogi pour-over cred iceland. Pabst truffaut letterpress stumptown, typewriter banh mi iceland jianbing 3 wolf moon vexillologist normcore."
  const figOne2 = document.createElement('figure')
  figOne2.setAttribute('class', 'figure')
  const imgOne2 = document.createElement('img')
  imgOne2.setAttribute('class', 'media')
  imgOne2.setAttribute('src', 'https://i.giphy.com/media/vlyviFEMurYmQ/giphy.webp')
  figOne2.appendChild(imgOne2)
  const pThree2 = document.createElement('p')
  pThree2.textContent = "Semiotics you probably haven't heard of them tilde slow-carb, unicorn tattooed VHS 90's roof party lumbersexual cliche food truck wayfarers af green juice. Small batch hoodie meh gluten-free, pop-up bespoke tumeric migas. Helvetica fingerstache kinfolk meditation mixtape bicycle rights prism aesthetic green juice subway tile. Ennui kinfolk etsy, before they sold out lo-fi adaptogen neutra raclette cred PBR&B banh mi kombucha iceland. Jean shorts migas chia tilde tumeric, gentrify neutra skateboard ennui tumblr vaporware pug. Put a bird on it tousled man bun hashtag prism literally."
  one_two.appendChild(pTwo2) // append
  one_two.appendChild(figOne2)
  one_two.appendChild(pThree2)


  // third collumn
  // second collumn try
  const one_three = document.createElement('div')
  one_three.setAttribute('class', 'collumn')
  oneCollumns.appendChild(one_three) // append
  const headOne3 = document.createElement('div')
  headOne3.setAttribute('class', 'head')
  one_three.appendChild(headOne3) // append
  const spanOne3 = document.createElement('span')
  spanOne3.setAttribute('class', 'headline hl1')
  spanOne3.textContent = "KETCHUP TRUCK HITS HAMBURGER STAND"
  headOne3.appendChild(spanOne3) // append
  const pOne3 = document.createElement('p')
  const spanTwo3 = document.createElement('span')
  spanTwo3.setAttribute('class', 'headline hl2')
  spanTwo3.textContent = "6 DEAD"
  pOne3.appendChild(spanTwo3) // append
  headOne3.appendChild(pOne3) // append
  const pTwo3 = document.createElement('p')
  pTwo3.textContent = "Ennui kinfolk etsy, before they sold out lo-fi adaptogen neutra raclette cred PBR&B banh mi kombucha iceland. Jean shorts migas chia tilde tumeric, gentrify neutra skateboard ennui tumblr vaporware pug. Put a bird on it tousled man bun hashtag prism literally.  Photo unrelated."
  const figOne3 = document.createElement('figure')
  figOne3.setAttribute('class', 'figure')
  const imgOne3 = document.createElement('img')
  imgOne3.setAttribute('class', 'media')
  imgOne3.setAttribute('src', 'https://media.giphy.com/media/1zjHd24CiLdok/giphy.gif')
  figOne3.appendChild(imgOne3)
  // const pThree3 = document.createElement('p')
  // pThree3.textContent = "THIS IS THE ARTICLE TEXT P TWO"
  one_three.appendChild(pTwo3) // append
  one_three.appendChild(figOne3)
  // one_trhee.appendChild(pThree3)
  ////////////////////////////////////////////
  // const oneP = document.createElement('p')
  // oneP.textContent = "Lorem ipsum dolor amet celiac scenester franzen hoodie. Waistcoat fixie intelligentsia ethical, pitchfork fanny pack direct trade listicle keffiyeh enamel pin beard. Mumblecore wayfarers cold-pressed gentrify occupy la croix listicle flannel kinfolk franzen bicycle rights vape vegan kale chips. Viral jianbing mlkshk chia tumblr hot chicken tacos gastropub organic +1."

  // oneContent.appendChild(oneP)
  newsDiv.appendChild(oneContent)

  const btnTwo = document.createElement('button')
  btnTwo.setAttribute('class', 'news-collapsible')
  btnTwo.classList.add('fluxbut')
  btnTwo.textContent = 'What Is The Joker and How Does It Work?'
  newsDiv.appendChild(btnTwo)
  // Create content for button two and append
  const twoContent = document.createElement('div')
  twoContent.setAttribute('class', 'news-button-content')
  const twoP = document.createElement('p')
  twoP.textContent = 'Lumbersexual +1 mixtape craft beer. Microdosing marfa cliche plaid, normcore narwhal pabst dreamcatcher VHS meh artisan freegan banjo. Retro cray meditation, dreamcatcher lomo enamel pin intelligentsia kombucha beard. Polaroid thundercats trust fund, keytar lo-fi pug green juice live-edge raclette heirloom tumblr tote bag unicorn fanny pack. Subway tile chambray hella sriracha, cred celiac listicle man bun yuccie slow-carb humblebrag. Whatever green juice taxidermy, scenester succulents 8-bit kitsch butcher pop-up. Vaporware edison bulb pug venmo kogi small batch flexitarian activated charcoal fixie selvage.'
  twoContent.appendChild(twoP)
  newsDiv.appendChild(twoContent)


  const btnThree = document.createElement('button')
  btnThree.setAttribute('class', 'news-collapsible')
  btnThree.classList.add('fluxbut')
  btnThree.textContent = 'What Can You Do About The Joker Right Now'
  newsDiv.appendChild(btnThree)
  // Create content for button three and append
  const threeContent = document.createElement('div')
  threeContent.setAttribute('class', 'news-button-content')
  const threeP = document.createElement('p')
  threeP.textContent = "Paleo truffaut listicle, deep v franzen yuccie kinfolk marfa. Heirloom chicharrones fingerstache tumblr kickstarter, vape affogato try-hard food truck. Offal hammock pop-up vape. Salvia tousled beard venmo jean shorts, health goth waistcoat locavore VHS. Bushwick tote bag biodiesel forage ethical normcore flexitarian vegan you probably haven't heard of them farm-to-table pork belly occupy woke next level vinyl."
  threeContent.appendChild(threeP)
  newsDiv.appendChild(threeContent)


  const btnFour = document.createElement('button')
  btnFour.setAttribute('class', 'news-collapsible')
  btnFour.classList.add('fluxbut')
  btnFour.textContent = 'Four simple ways to clean unsightly blood stains.'
  newsDiv.appendChild(btnFour)
  // Create content for button four and append
  const fourContent = document.createElement('div')
  fourContent.setAttribute('class', 'news-button-content')
  const fourP = document.createElement('p')
  fourP.textContent = "Letterpress actually vaporware, freegan listicle sartorial pour-over. Selfies fam succulents, blue bottle normcore banh mi hammock hoodie ethical swag ennui hella gentrify meh. Listicle four loko thundercats ramps, pabst pop-up mixtape crucifix freegan raclette lumbersexual kale chips four dollar toast scenester. Hot chicken iPhone vexillologist lomo. Tacos flexitarian man bun, DIY narwhal church-key mustache typewriter you probably haven't heard of them pinterest plaid yuccie live-edge yr. Tote bag knausgaard normcore health goth irony hashtag. Vice enamel pin iPhone selfies letterpress flannel."
  fourContent.appendChild(fourP)
  newsDiv.appendChild(fourContent)

  // Create ticker
  const tickerWrap = document.createElement('div')
  tickerWrap.setAttribute('class', 'ticker-wrap')
  newsDiv.appendChild(tickerWrap)
  const ticker = document.createElement('div')
  ticker.setAttribute('class', 'ticker')
  tickerWrap.appendChild(ticker)
  // ticker content, prolly refactor
  const tContentA = document.createElement('div')
  tContentA.setAttribute('class', 'ticker-item')
  tContentA.textContent = 'YOLO cornhole echo park mlkshk lomo. Austin kinfolk man braid vice meditation edison bulb semiotics.'
  ticker.appendChild(tContentA)

  const tContentB = document.createElement('div')
  tContentB.setAttribute('class', 'ticker-item')
  tContentB.textContent = 'Post-ironic jianbing before they sold out man braid. Forage whatever franzen, ethical godard poutine cliche artisan DIY coloring book.'
  ticker.appendChild(tContentB)

  const tContentC = document.createElement('div')
  tContentC.setAttribute('class', 'ticker-item')
  tContentC.textContent = 'XOXO hexagon slow-carb meggings edison bulb banh mi seitan.'
  ticker.appendChild(tContentC)

  const tContentD = document.createElement('div')
  tContentD.setAttribute('class', 'ticker-item')
  tContentD.textContent = 'Blog live-edge pour-over vegan retro, la croix taxidermy tumeric.'
  ticker.appendChild(tContentD)

  const tContentE = document.createElement('div')
  tContentE.setAttribute('class', 'ticker-item')
  tContentE.textContent = 'Try to quantify the GUI network, maybe it will back up the neural interface!'
  ticker.appendChild(tContentE)

  const tContentF = document.createElement('div')
  tContentF.setAttribute('class', 'ticker-item')
  tContentF.textContent = 'Send the visual bus into the array, it will synthesize the virus by navigating its GUI driver!'
  ticker.appendChild(tContentF)




  // Append the whole shabang
  mainPage.appendChild(newsDiv)
  
  // Button opening
  const coll = document.getElementsByClassName("news-collapsible");

  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

}