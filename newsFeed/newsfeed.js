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
  newsHead.textContent = 'NEWS FEED'
  newsDiv.appendChild(newsHead)

  // Create News Buttons
  const btnOne = document.createElement('button')
  btnOne.setAttribute('class', 'news-collapsible')
  btnOne.textContent = "If Joker Is So Terrible, Why Don't Statistics Show It?"
  newsDiv.appendChild(btnOne)
  // Create content for button one and append
  const oneContent = document.createElement('div')
  oneContent.setAttribute('class', 'news-button-content')
  const oneP = document.createElement('p')
  oneP.textContent = "Lorem ipsum dolor amet celiac scenester franzen hoodie. Waistcoat fixie intelligentsia ethical, pitchfork fanny pack direct trade listicle keffiyeh enamel pin beard. Mumblecore wayfarers cold-pressed gentrify occupy la croix listicle flannel kinfolk franzen bicycle rights vape vegan kale chips. Viral jianbing mlkshk chia tumblr hot chicken tacos gastropub organic +1."

  oneContent.appendChild(oneP)
  newsDiv.appendChild(oneContent)

  const btnTwo = document.createElement('button')
  btnTwo.setAttribute('class', 'news-collapsible')
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