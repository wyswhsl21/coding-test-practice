//이번에 회사 면접을 보면서 이런 문제도 있다는걸 알게되고, 회고 하는 시간을 가질겸 만들어 보았다.
//이번 코테는 되게 간단하게 보일수도 있지만 cors에 대해서 잘 모르고 있다면 어려울 수 있는 문제다.

// 먼저 문제는 이렇다
// 해당 서버 주소를 알려준다 마지막 부분은 {100에서 150사이의 정수를 뜻한다.}
// 여기까지는 반복문 돌려서 100에서 150사이의 정수를 찾는 문제인줄 알았다. 근데 백엔드 코드를 보여주고 데이터 통신을 하는게 문제였다.
// 백엔드 코드는 이렇다 . user-agent 에 해당 값이 없으면 400 error 을 보내고 Authorization 에 토큰이 없으면 400 error 보내고 method 가 post가 아니라면
// 400 error 를 보내고 나머지 부분이 다 정상적으로 들어가있으면 정답 코드를 도출해내는 문제였다.

// 나는 리액트를 다루는 개발자였기 때문에 당연히 리액트 환경에서 문제를 풀었다.
async function ymLogin() {
  try {
    for (let i = 100; i <= 150; i++) {
      const { data } = await axios.post(
        `https:// 서버 url주소 ${i}`,
        {},
        {
          headers: {
            Authorization: "Bearer ey",
            "User-Agent": "해당 브라우저",
          },
        }
      );

      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}
// 이렇게 늘 데이터 통신 하던대로 axios 를 이용해서 통신을 하는데 cors 가 떳다. 나는 cors가 뜨면 출처가 다르다는건 알고 있었다.
//출처란 origin 이고  origin이란 ? host,port,protocol 세개를 합친거다. 다른출처랑 이것들중 하나라도 다른걸 의미하는것이다.
// 알고 있었지만 백엔드에서 Access-allow-origin-headers 에 * 표시로 접근을 허용시켜서 지금까지 잘 통신했던거였다 .
//http 환경에서 https 로 통신을 하려고 하니 당연히  cors가 뜨지 ... 이걸 생각 못하고 ,, 결국엔 node 환경에서 fetch 를  이용해서 풀어보았다.

async function Numinteger() {
  for (let i = 100; i <= 150; i++) {
    try {
      await fetch(`url주소_${i}`, {
        method: "POST",
        headers: {
          "user-agent": "SniperFactoryBrowser",
          authorization: "Bearer ey",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.log(error);
    }
  }
}

Numinteger();
