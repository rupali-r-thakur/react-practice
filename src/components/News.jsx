import React from "react";
import NewsItem from "./NewsItem";

function News() {
  const article = [
    {
      source: {
        id: "ign",
        name: "IGN",
      },
      author: "Wesley Yin-Poole",
      title: "PS5 Pro Specs Leak Online - IGN",
      description:
        "Specifications for the unannounced PlayStation 5 Pro have leaked online, revealing the power of the console Sony reportedly plans to release Q4 2024.",
      url: "https://www.ign.com/articles/ps5-pro-specs-leak-online",
      urlToImage:
        "https://assets-prd.ignimgs.com/2023/11/10/untitled-design-1-1699641410352.png?width=1280",
      publishedAt: "2024-03-18T11:25:42Z",
      content:
        "Specifications for the unannounced PlayStation 5 Pro have leaked online, revealing the power of the console Sony reportedly plans to release during the fourth quarter of 2024.\r\nThe specs list first e… [+2337 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Christian Edwards",
      title:
        "Putin extends one-man rule in Russia after stage-managed election devoid of credible opposition - CNN",
      description:
        "President Vladimir Putin has tightened his grip on the country he has ruled since the turn of the century, with results from Russia’s stage-managed election indicating a predictably large victory for the Kremlin leader in a result that was a foregone conclusi…",
      url: "https://www.cnn.com/2024/03/17/europe/putin-wins-russia-presidential-election-intl/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/2024-03-17t212036z-1537592867-rc2xn6aotth3-rtrmadp-3-russia-election-putin-copy.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-03-18T11:25:00Z",
      content:
        "President Vladimir Putin has tightened his grip on the country he has ruled since the turn of the century, with results from Russias stage-managed election indicating a predictably large victory for … [+8386 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: null,
      title:
        'Man falls to his death from hot-air balloon in Australia, leaving pilot and passengers "traumatized" - CBS News',
      description:
        "A man fell to his death from a hot-air balloon as it passed over suburban Melbourne, Australia's second-largest city.",
      url: "https://www.cbsnews.com/news/hot-air-balloon-death-australia/",
      urlToImage:
        "https://assets1.cbsnewsstatic.com/hub/i/r/2024/03/18/4b959f93-a326-4907-b96e-fd2da10dfa07/thumbnail/1200x630/eac9806215cd15e324179c535441485c/ap24078055522762.jpg?v=d1d78866939020fc1f2607ef7298e4ec",
      publishedAt: "2024-03-18T11:17:00Z",
      content:
        "A man fell to his death from a hot-air balloon Monday as it passed over suburban Melbourne, Australia's second-largest city.\r\nThe hot-air balloon took off from Melbourne's northern suburbs early in t… [+1600 chars]",
    },
    {
      source: {
        id: null,
        name: "Sports Illustrated",
      },
      author: "Gilberto Manzano",
      title:
        "NFL Free Agency 2024: Texans Are Winners, Panthers Are Losers After Week 1 - Sports Illustrated",
      description:
        "Houston takes advantage of C.J. Stroud on a rookie contract, while Carolina failed to capitalize on getting a first-round pick moving Brian Burns to the Giants.",
      url: "https://www.si.com/nfl/2024/03/18/2024-nfl-free-agency-winners-losers-texans-panthers",
      urlToImage:
        "https://www.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjAzNjYzMjY3NjE1MjIxNjIy/cj-stroud-texans-browns.jpg",
      publishedAt: "2024-03-18T11:00:00Z",
      content:
        "With the first week of NFL free agency in the books, let’s assess which teams got better or worse by declaring winners and losers. \r\nYes, the Carolina Panthers will again be on the losing side. That’… [+14389 chars]",
    },
    {
      source: {
        id: null,
        name: "Fox Business",
      },
      author: "Stephen Sorace",
      title:
        "Forced TikTok sale could 'absolutely' happen before November election, House China committee leader says - Fox Business",
      description:
        'House China Select Committee Chair Mike Gallagher, R-Wis., says that it\'s "absolutely" possible that a forced sale of TikTok could occur before November.',
      url: "https://www.foxbusiness.com/politics/forced-tiktok-sale-absolutely-happen-november-election-house-china-committee-leader-says",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/05/0/0/AP23137763449791.jpg?ve=1&tl=1",
      publishedAt: "2024-03-18T10:30:00Z",
      content:
        "A forced sale of TikTok, the social media app that U.S. intelligence officials have labeled a national security risk, could happen before the 2024 presidential election in November, the House China c… [+2121 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Holly Ellyatt",
      title:
        "Basking in his Russian election win, Putin talks about political nemesis Alexei Navalny's 'sad' death for the first time - CNBC",
      description:
        "Speaking to reporters late Sunday night, Putin made rare comments on the death of his political nemesis Alexei Navalny.",
      url: "https://www.cnbc.com/2024/03/18/putin-wins-russian-election-and-talks-about-navaln.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107388575-1710750162068-gettyimages-2084805375-AFP_34LT3PY.jpeg?v=1710750760&w=1920&h=1080",
      publishedAt: "2024-03-18T10:10:27Z",
      content:
        "Russian President Vladimir Putin was upbeat after winning a fifth term in power in Russia's presidential election over the weekend. He chose the moment to make his first public remarks on the death o… [+6084 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Jon Porter",
      title: "Apple's AI ambitions could include Google or OpenAI - The Verge",
      description:
        "Apple has reportedly held discussions with Google to bring its Gemini generative AI technology to the iPhone and has also considered using OpenAI’s ChatGPT.",
      url: "https://www.theverge.com/2024/3/18/24104626/apple-license-google-gemini-generative-ai-openai-chatgpt",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/AznF8_8PWIM-17iDULo4aihqkv8=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24931975/236794_iPhone_15_pro_pro_Max_VPavic_0019.jpg",
      publishedAt: "2024-03-18T09:30:33Z",
      content:
        "Apples AI ambitions could include Google or OpenAI\r\nApples AI ambitions could include Google or OpenAI\r\n / The iPhone-maker is in active talks to bring Gemini to the iPhone, and has also considered u… [+2452 chars]",
    },
    {
      source: {
        id: null,
        name: "The Athletic",
      },
      author: "Alex Andrejev",
      title:
        "Rick Pitino criticizes ‘fraudulent’ NET rankings after St. John’s NCAA Tournament snub - The Athletic",
      description:
        "Despite six straight wins before its loss to UConn, St. John’s was not one of the first four teams to miss the tournament.",
      url: "https://theathletic.com/5349686/2024/03/17/rick-pitino-net-rankings-ncaa-comments/",
      urlToImage:
        "https://cdn.theathletic.com/app/uploads/2024/02/18213343/gettyimages-2001378566-594x594-1.jpg",
      publishedAt: "2024-03-18T09:15:06Z",
      content:
        "While Rick Pitino recognized that bitterness does not help after the NCAA selection committee snubbed St. Johns, the coach was critical of the NCAA Evaluation Tool (NET) rankings that serve a key rol… [+2686 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "John Fritze",
      title:
        "Supreme Court to weigh claim that New York pressured businesses to cut ties with NRA - CNN",
      description:
        "The Supreme Court will hear arguments Monday in an unusual First Amendment appeal from the National Rifle Association against a New York financial regulator who persuaded banks and insurance companies to sever ties with the gun rights group.",
      url: "https://www.cnn.com/2024/03/18/politics/supreme-court-new-york-nra/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2059261098.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-03-18T09:00:00Z",
      content:
        "The Supreme Court will hear arguments Monday in an unusual First Amendment appeal from the National Rifle Association against a New York financial regulator who persuaded banks and insurance companie… [+3548 chars]",
    },
    {
      source: {
        id: null,
        name: "TMZ",
      },
      author: "TMZ Staff",
      title:
        "Mauricio Umansky Says Separation Will Play Out on 'Buying Beverly Hills' - TMZ",
      description:
        'Mauricio Umansky and Kyle Richards\' separation is coming to television in its rawest form ... with Umansky saying footage from right after the news broke will appear in "Buying Beverly Hills."',
      url: "https://www.tmz.com/2024/03/18/mauricio-umansky-kyle-richards-separation-buying-beverly-hills-real-housewives/",
      urlToImage:
        "https://imagez.tmz.com/image/5b/16by9/2024/03/14/5baa680863f54429b81916bc37852f98_xl.jpg",
      publishedAt: "2024-03-18T09:00:00Z",
      content:
        'Mauricio Umanskyand Kyle Richards\' separation is coming to television in its rawest form ... with Umansky saying footage from right after the news broke will appear in "Buying Beverly Hills."\r\nWe spo… [+1347 chars]',
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Lim Hui Jie, Shreyashi Sanyal",
      title:
        "Japan's Nikkei 225 leads gains in Asia markets ahead of BOJ meeting; China shares rise for six straight days - CNBC",
      description:
        "The U.S. Federal Reserve will start its March FOMC meeting on Tuesday, while the BOJ and RBA will also be holding monetary policy meetings this week.",
      url: "https://www.cnbc.com/2024/03/18/central-banks-take-center-stage-this-week.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107232467-1682640837861-gettyimages-1248845339-AFP_33BN98L.jpeg?v=1694994098&w=1920&h=1080",
      publishedAt: "2024-03-18T08:03:00Z",
      content:
        "Japan's Nikkei 225 index led gains in Asia-Pacific markets on Monday, while China shares extended gains after data showed its economy kicked off the year on a strong note.\r\nThe U.S. Federal Reserve w… [+1420 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Jennifer Schonberger",
      title:
        "Investors are about to find out whether Fed still expects 3 rate cuts in 2024 - Yahoo Finance",
      description:
        "All eyes this week will be on the release of the Fed's quarterly 'dot plot,' which will signal whether central bank officials still agree that three rate...",
      url: "https://finance.yahoo.com/news/investors-are-about-to-find-out-whether-fed-still-expects-3-rate-cuts-in-2024-080006502.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/bWrlI.0tAqsstSCsoWtM2w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-02/843b7270-dbeb-11ee-bbbb-4f21e9a5b744",
      publishedAt: "2024-03-18T08:00:06Z",
      content:
        "Markets are on edge this week as Federal Reserve officials prepare to signal whether they still believe three interest rate cuts are likely in 2024.\r\nThat new projection on Wednesday will come in the… [+4691 chars]",
    },

    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: null,
      title:
        "NCAA Tournament 2024 bracket picks, upsets, Cinderella teams: Model simulates March Madness 10,000 times - CBS Sports",
      description:
        "SportsLine's college basketball model called 20 first-round NCAA Tournament upsets by double-digit seeds",
      url: "https://www.cbssports.com/college-basketball/news/ncaa-tournament-2024-bracket-picks-upsets-cinderella-teams-model-simulates-march-madness-10000-times/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2024/01/23/d4285342-3581-476e-830b-f8238e4b0ae8/thumbnail/1200x675/b8845bee29238330e4702de5b62851de/kyle-filipowski-duke-usatsi.jpg",
      publishedAt: "2024-03-18T07:30:51Z",
      content:
        "Tennessee was in the running for a No. 1 seed in the 2024 NCAA Tournament bracket, but the Vols settled for the No. 2 seed in the Midwest Region. They are riding a two-game losing streak after clinch… [+4180 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5google.com",
      },
      author: "Abner Li",
      title:
        "Qualcomm announces Snapdragon 8s Gen 3 with on-device AI - 9to5Google",
      description:
        "Qualcomm today revealed the Snapdragon 8s Gen 3 as a smartphone chip with some flagship-level features that comes in below the 8 Gen 3.",
      url: "http://9to5google.com/2024/03/17/snapdragon-8s-gen-3/",
      urlToImage:
        "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2024/03/Snapdragon-8s-Gen-3-cover-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2024-03-18T07:30:00Z",
      content:
        "Qualcomm today revealed the Snapdragon 8s Gen 3 as a smartphone chip with some flagship-level features that comes in below the 8 Gen 3. \r\nThe Snapdragon 8s Gen 3 is built on a 4 nm process with a 1+4… [+1126 chars]",
    },
  ];
  console.log(article);
  return (
    <>
      <div className="container my-3 ">
        <div className="row">
          <h2>newsMonkey - top headline</h2>
          {article.map((element) => {
            return (
              <div className="col-md-4 ">
                <NewsItem
                  title={element.title.slice(0, 43)}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default News;
