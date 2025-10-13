(function () {
  const input = document.getElementById("userInput");
  const btn = document.getElementById("submitBtn");
  const status = document.getElementById("status");
  const output = document.getElementById("output");
  const emotions = document.getElementById("emotions");

  let loading = false;
  let loadingStep = "idle";

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  async function handleSubmit() {
    const value = input.value.trim();
    if (!value || loading) return;

    if (
      value ===
      `나 가진 것 탄식밖에 없어
저녁거리마다 물끄러미 청춘을 세워 두고
살아온 날들을 신기하게 세어 보았으니
그 누구도 나를 두려워하지 않았으니
내 희망의 내용은 질투뿐이었구나
그리하여 나는 우선 여기에 짧은 글을 남겨 둔다
나의 생은 미친 듯이 사랑을 찾아 헤매었으나
단 한 번도 스스로를 사랑하지 않았노라`
    ) {
      loading = true;
      loadingStep = "thinking";
      btn.disabled = true;
      output.textContent = "";
      render();

      await sleep(2000);
      loadingStep = "writing";
      render();

      await sleep(3000);
      emotions.textContent = `
      {'슬픔': 0.931,
      '안타까움/실망': 0.925,
      '서러움': 0.91,
      '깨달음': 0.85,
      '패배/자기혐오': 0.681,
      '힘듦/지침': 0.655,
      '불안/걱정': 0.646,
      '불쌍함/연민': 0.619,
      '비장함': 0.541,
      '한심함': 0.525,
      '절망': 0.488,
      '부담/안_내킴': 0.45,
      '불평/불만': 0.416,
      '당황/난처': 0.383,
      '부끄러움': 0.363,
      '죄책감': 0.345,
      '의심/불신': 0.303}
      `;
      output.textContent = `
    나는 지금 어디쯤 서 있는가 
    달빛에 젖은 낙엽 같은 존재로 
    발끝부터 서서히 스며드는 차가운 기운 느끼며 
    빈손으로 걸어온 긴 여정 되돌아본다

    탄식 밖에 남은 것이 없던 그날들 
    청춘이라는 이름표 달아두고 
    매일같이 거울 앞에서 서성이던 시간들 
    누구도 두려워했던 적은 없었지만 
    마음속엔 늘 누군가에 대한 질투만 가득했으니 

    사랑을 찾아 이리 뛰고 저리 뛰던 발걸음이었으나 
    정작 자기 자신이란 꽃 한 송이 피워내지 못한 미련함 
    세상의 잣대에 이리저리 휘둘리며 살아온 세월들이 
    이제 와서 보니 모두 부질없다 느껴진다

    가슴 한가운데 뚫린 구멍같은 공허함 
    아무리 채워보려 해도 메워지지 않는 결핍감 
    어둠 속에서 홀로 빛을 찾는 반딧불이처럼 
    희망이라는 등불만 들고 정처없이 떠돌았던 날들

    그래도 어쩌겠나 이런 게 삶인가 보다 
    상처투성이 발밑에 쌓이는 먼지들 보며 
    언젠가 흙으로 돌아갈 순간 기다리며 
    오늘도 묵묵히 걸어가야 할 길일 테니
    `;

      loading = false;
      loadingStep = "idle";
      btn.disabled = false;
      render();
    } else {
      output.textContent = "다시 입력해주세요.";
    }
  }

  function render() {
    if (loading && loadingStep === "thinking") {
      status.textContent = "💡 영감을 받는중...";
    } else if (loading && loadingStep === "writing") {
      status.textContent = "✍️ 시를 짓는중...";
    } else {
      status.textContent = "";
    }
  }

  btn.addEventListener("click", handleSubmit);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSubmit();
  });
})();
