var cv = [
  {
    "name":"蔡陳緯",
    "name_en":"Chen-Wei Tsai",
    "image":"img/97155248.jpg",
    "introduction":"您好，我是蔡陳緯，目前任職於CDC (Centers for Disease Control)疫情中心的資料加值科，主要負責SAS分析平台管理與應用，包含平台規劃、排程流程、權限控管、系統文件撰寫、程式設計、資料庫介接、數據管理、資料分析、視覺化呈現與BI工具。在我的求學期間大學為數理背景，研究所主修生物統計方法。用資料導向概念提升各類業務，並導入系統以加強各項資料應用，我也樂於學習其它程式語言與接觸不同領域議題，享受運動並且保持開朗與正面。",
    "birthday":"1990/5/10",
    "edu_background":[
        "國立陽明大學, 公共衛生研究所碩士-生物統計組(主修生物統計) (2012/09/01~2014/06/30)",
        "東吳大學, 財務工程與精算數學系學士 (2008/09/01~2012/06/30)"
    ],
    "work":[
          "衛生福利部疾病管制署-疫情中心 研發替代役 (2014/9/22~2017/7/28)",
		  "SAS EG實戰講堂教材邀稿"
    ],
    "intern":[
		"第二屆SAS校園大使",
        "國立陽明大學 大學部-醫學系 教學助理：生物統計學 (2012~2014)",
        "國立陽明大學 研究所-公共衛生學群 教學助理：生物統計學(一)、生物統計學(二) (2012~2014)"
    ],
    "dev_skill":[
		"主要程式：SAS Base、SAS EG、R",
		"商業智慧工具：Power BI、SAS VA、Tableau、Business Objects",
    ],
	"platform":[
		"伺服器管理：Windows Server",
		"平台維運：SAS Management Console(SMC)- Office Analytics、Visual Analytics(SAS mobile BI)",
    ],
    "tool":[
        "統計分析：SAS、R",
        "網頁呈現：Shiny Web、HTML、CSS、Javascript(圖表函式庫Highcharts、D3js亦有使用經驗)",
		"雲端服務：Microsoft Azure、AWS"
    ],
    "phone":"0978-377-378、0908-156-908",
    "email":"goodmanryan510@gmail.com",
    "facebook":"https://www.facebook.com",
    "address":"115 台北市南港區舊莊街一段",
    "website":"https://chenweitsai.azurewebsites.net/"
  }
]


var achievement = [
  {
    "title":"Iot 機械手臂",
    "introduction":"開發板使用Arduino與Raspberry pi，藉由開發版官網所提供之内建函式進行程式編寫，使用可變電阻去控制伺服器馬達已達到彷彿人體手部之運作。",
    "description":"<font color=\"#e6b800\">此機械手臂皆為DIY製作，購買外面的實體壓克力板，因礙於身邊沒有相關雷切設備，先已投影紙進行零件之繪製，最後轉繪到壓克力板，切割部分使用壓克力刀與磨刻機工具組，螺絲、伺服馬達、麵包版、電線在光華電子材料行購買，用電鑽鑽洞後進行組裝，無數次測試手臂關節是否運作流暢，還得考慮開發版的供電已確保電量足夠驅使6個伺服馬達。</font>",
    "link_public":0,
    "link":"",
    "image":["img/achievement/ROBOT_img1.jpg","img/achievement/ROBOT_img2.jpg","img/achievement/ROBOT_img3.jpg","img/achievement/ROBOT_img4.jpg","img/achievement/ROBOT_img5.jpg"]
  },
  {
    "title":"Chat bot 聊天機器人",
    "introduction":"Chat bot使用line所提供之api,藉由python進行程式編寫，在得到使用者所傳指令，以爬蟲去爬網頁做剖析，回傳重要的資訊給使用者，節省使用者網站瀏覽之時間。",
    "description":"<font color=\"#e6b800\">系統可回傳即時空汙程度、比特幣最新價格、樂透開獎號碼等。</font>",
    "link_public":0,
    "link":"",
    "image":["img/achievement/CHBOT_img1.jpg","img/achievement/CHBOT_img2.jpg","img/achievement/CHBOT_img3.jpg","img/achievement/CHBOT_img4.jpg","img/achievement/CHBOT_img5.jpg"]
  },
  {
    "title":"IP black list 世界地圖",
    "introduction":"以Raspberry pi做為我們的server，網路上某些資安部落格每日會更新ip黑名單列表(可能是攻擊來源or跳板)，藉由python寫爬蟲去抓取網路上提供的ip black list，根據這些ip清單繪製成世界地圖，進行統計分析。",
    "description":"<font color=\"#e6b800\">Server(樹梅派)每日會跑cronjob，若ip black list更新，會將清單載回本機存入influxdb,藉由python模組geoip2將ip轉換成所在國家，最後用grafana將資料視覺化。<br/>ip資料來源為:Ransomewaretracker.abuse、 Spamhaus.org、 Sslbl.abuse、 Zeustracker.abuse </font>",
    "link_public":0,
    "link":"",
    "image":["img/achievement/IP_img3.jpg","img/achievement/IP_img2.jpg","img/achievement/IP_img1.jpg","img/achievement/IP_img4.jpg"]
  },
]


var project = [

  {
	"title":"培能地方巨量資料分析與Power BI應用推廣",
    "introduction":"為強化中央與地方協同防疫量能，同步共享本署開放資料於各縣市，提升地方資料處理能力，進一步分析與加值應用，進而推廣Power BI 2.0。",
    "description":"疾管署於2015年導入微軟Power BI，使資料分析人員能快速產製視覺化報表。去(105)年舉辦教育訓練推廣給22個縣市衛生局，教導使用技巧與實機操作；隨後於9月及今年2月釋出發行面板(法傳、健保資料及登革熱報表)供各縣市參考使用。<br/><font color=\"#e6b800\">在此計畫中我參與內部系統建置、面版設計與發行，並也編排課程內容擔任Power BI教育訓練講師。</font>",
    "link_public":1,
    "link":"",
    "image":["img/project/powerbi_img1.jpg","img/project/powerbi_img3.jpg","img/project/powerbi_img4.png","img/project/powerbi_img5.png","img/project/powerbi_img6.png"]
  },
   {
    "title":"防疫雲2.0計畫",
    "introduction":"防疫雲計畫是衛福部健康雲下的子計畫，主要為輔導醫院運用醫院電子病歷進行傳染病通報，以及導入醫院實驗室的傳染病自動通報作為病原體監測。2.0計畫的重點在於推動新世代防疫資訊架構，並導入新技術於防疫應用與強化大數據分析能力以達成精準防疫。",
    "description":"配合政府開放資料平台open data、跨機關資料交換需求結合地方防疫資訊於分析應用。另外導入物聯網、AR/VR於防疫資訊應用，利用感測器物聯網建構戶內CO2、戶外PM2.5雲端監測系統，減少空氣及飛沫傳染疾病的發生。開發新的物聯網應用，如建立更好的物聯網病媒蚊監測，以輔助目前人工監測的限制；利用連續監視影像辨識，監測口罩配帶率，與流浪貓狗的移動及狂犬病疫苗施打情形。AR/VR將應用於防疫教學及演習(如生恐應變)，提供相關的教學應用給民眾及學校使用，亦可加強在一般課堂演練的不足。",
    "link_public":0,
    "link":"",
    "image":["img/project/comm_img1.png","img/project/comm_img2.png","img/project/comm_img3.png"]
  },
  {
    "title":"統計處獨立作業區分析經驗",
    "introduction":"本署與美國CDC合作研究計畫，評估我國流感相關之超量死亡(influenza associated excess mortality)以供全球流感預測模型之建立。",
    "description":"為美國CDC全球流感預測模型之建立，以評估我國流感疫情嚴重度，擬採用衛福部統計處死亡統計資料建構模型，推估不同流感季之流感相關之超量死亡率，並結合本署流感常規監測資料，分析不同流感季的疾病嚴重度及不同流感病毒流行時感染併發重症或死亡的高危險族群，針對目標族群規畫防疫資源分配及研擬相關介入措施，以期降低流感疾病負擔及對社會經濟的衝擊。<br/><font color=\"#e6b800\">在此計畫中我受派至衛福部統計處執行資料分析，提供我國相關死亡數據與分析結果，以供美國CDC後續研究進行。</font>",
    "link_public":0,
    "link":"",
    "image":["img/project/iaem_img1.jpg"]
  }
]


var lesson = [
  {
    "title":"SMC 平台管理",
    "introduction":"疫情中心為疾病署核心業務單位，負責傳染病通報預警系統建置及執行、國內外疫情資料分析監測，是一結合資訊與統計的單位，常有相關訓練課程。如：SAS系列課程與平台管理、微軟Power BI 2.0、微軟Azure雲端架構、Informatica ETL工具等。",
    "description":"SAS Platform Administration 1: Essentials (For OA)<br/>SAS Visual Analytics: Administering a Non-Distributed Deployment on Windows<br/>SAS Visual Analytics: Fast Track<br/>SAS Programming 3: Advanced Techniques and Efficiencies&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color=\"#4DFFFF\">於今年6/7-6/9完成課程</font>",
    "link_public":0,
    "link":"",
    "image":["img/lesson/prg_img1.png","img/lesson/prg_img2.png","img/lesson/prg_img3.png"]
  },
  {
    "title":"Google Cloud OnBoard - 台北",
    "introduction":"Google Cloud OnBoard是藉由認證講師帶領您進入Google Cloud Platform(GCP) Training的入門篇。講師將以簡單明瞭的簡報解說與技術示範讓您一步一步地了解Google App Engine，Datastore，Storage, Container Engine, Compute Engine, Network, Big Data，以及Machine learning。",
    "description":"",
    "link_public":0,
    "link":"",
    "image":["img/lesson/gcp_img1.jpg","img/lesson/gcp_img3.jpg","img/lesson/gcp_img4.jpg","img/lesson/gcp_img5.jpg","img/lesson/gcp_img6.jpg","img/lesson/gcp_img7.jpg","img/lesson/gcp_img8.jpg","img/lesson/gcp_img2.jpg","img/lesson/gcp_img9.jpg","img/lesson/gcp_img.png"]
  },
  {
    "title":"2017 FinTechBase Festival 金融科技創新嘉年華",
    "introduction":"台灣首屆旗艦型FinTech專展<br/> 為協助台灣金融服務產業快速因應全球金融科技市場的轉變，由金管會指導金融總會籌設「金融科技發展基金」，並委託資策會大數據所執行「金融科技創新創業及人才培育計畫」，推動金融科技創新基地FinTechBase。&nbsp;&nbsp;2017-03-04",
    "description":"規劃六大主題展區，包括「區塊鏈與大數據」、「理財與聊天機器人」、「支付」、「存貸」、「旅遊金融」、「保險科技」，參展單位目標邀集前述FinTech Demo創新發表之國內外新創團隊，及國內各大金融周邊單位、各大金融機構及金融資訊業者，參與設攤展示其金融科技服務創新產品。",
    "link_public":0,
    "link":"",
    "image":["img/lesson/fint_img1.jpg","img/lesson/fint_img2.png"]
  },
  {
    "title":"Tableau 10",
    "introduction":"Tableau 10 發佈分享會",
    "description":"",
    "link_public":0,
    "link":"",
    "image":["img/lesson/t10_img1.jpg","img/lesson/t10_img2.jpg","img/lesson/t10_img3.jpg"]
  },
  {
    "title":"2016 IBM Cloud Innovation Day 雲商機，創智紀",
    "introduction":"雲端布局and創新開發，一日補腦。",
    "description":"",
    "link_public":0,
    "link":"",
    "image":["img/lesson/day_img1.jpg"]
  }
  
]


var school = [
  {
    "title":"碩士修習課程",
    "introduction":"",
    "description":"",
    "link_public":0,
    "link":"",
    "image":["img/school/score_img1.png"]
  },
  {
    "title":"大學修習課程",
    "introduction":"",
    "description":"",
    "link_public":0,
    "link":"",
    "image":["img/school/score_img2.png"]
  }
]


var publication = [
  {
    "author":"蔡陳緯",
    "description":"SAS 醫療EG-實戰講堂:登革熱開放資料檢視地方防疫量能，2017年1月。",
	"link":"https://drive.google.com/file/d/0B33oMeDFCkmqTTlIZGtrbWpmMWlDb0NjOVM5ZDgyVnF2bGJr/view",
    "type":"教材邀稿"
  },
  {
    "author":"Chao-Yu Guo, Yu-Jing Chen, Meng-Hsuan Sung, Wen-Chi Pan, Mu-Jean Chen, Chen-Wei Tsai, Ren-Hong Wang, Nai-Yun Hsu, Huey-Jen Su",
    "description":"Why care about the Chinese New Year and Lunar Ghost Month? It's the temperature impact on mortality that matters! ",
    "type":"期刊論文(投稿中)"
  },
  {
    "author":"劉宇倫、張啟明、劉定萍、郭宏偉、蔡陳緯、葉鎰維、莊人祥",
    "description":"於我國機場發燒篩檢能偵測到伊波拉病毒境外移入的機率推估，疾病管制署疫情報導，第30卷第20期，2014年10月。",
	"link":"http://www.cdc.gov.tw/info.aspx?treeid=075874dc882a5bfd&nowtreeid=875e420d705a97d9&tid=BA3031D37001E373",
    "type":"期刊論文"
  },
  {
    "author":"Chao-Yu Guo, Wen-Chi Pan, Mu-Jean Chen, Chen-Wei Tsai, Nai-Tzu Chen, Huey-Jen Su",
    "description":"When are we most vulnerable to temperature variations in a day? PLoS One. 2014; 9(12): e113195.",
	"link":"http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0113195",
    "type":"期刊論文"
  },
  {
    "author":"蔡陳緯",
    "description":"	以重複排列模擬研究多項式遞延分配模型探討台灣地區溫度與死亡率的關係，碩士論文，公共衛生研究所碩士-生物統計組，2013。",
	"link":"http://handle.ncl.edu.tw/11296/ndltd/71010416204554379209",
    "type":"碩士畢業論文"
  }
]
