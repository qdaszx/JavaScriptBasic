import axios from "axios";
import cheerio from "cheerio";

const main = async () => {
  const res = await axios.get("https://finance.naver.com/sise/", {
    headers: {
      "Content-type": "text/html; charset=UTF-8",
      Accept: "*/*",
    },
  });
  const pageData = cheerio.load(res.data);

  const lft = pageData(".lft");
  const KOSPI_now = pageData("#KOSPI_now").text();
  const KOSPI_change = pageData("#KOSPI_change").text();
  const KOSDAQ_now = pageData("#KOSDAQ_now").text();
  const KOSDAQ_change = pageData("#KOSDAQ_change").text();
  const KPI200_now = pageData("#KPI200_now").text();
  const KPI200_change = pageData("#KPI200_change").text();

  console.log("코스피", KOSPI_now);
  console.log("코스닥", KOSDAQ_now);
  console.log("코스피200", KPI200_now);
  console.log("");

  const popTop10 = pageData("#popularItemList").children("li");

  popTop10.map((num) => {
    const liItem = popTop10.eq(num);
    console.log("랭크 : ", liItem.children().eq(0).text());
    console.log("종목이름 : ", liItem.children().eq(1).html());
    console.log("수치 : ", liItem.children().eq(2).text());
    console.log("링크 : ", liItem.children("up").eq(2).text());
    console.log("");
  });
};

main();
