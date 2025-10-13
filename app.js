(function () {
  const input = document.getElementById("userInput");
  const btn = document.getElementById("submitBtn");
  const status = document.getElementById("status");
  const output = document.getElementById("output");

  let loading = false;
  let loadingStep = "idle";

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  async function handleSubmit() {
    const value = input.value.trim();
    if (!value || loading) return;

    loading = true;
    loadingStep = "thinking";
    btn.disabled = true;
    output.textContent = "";
    render();

    await sleep(2000);
    loadingStep = "writing";
    render();

    await sleep(3000);
    output.textContent = `✅ 결과: "${value}"에 대한 응답 텍스트`;

    loading = false;
    loadingStep = "idle";
    btn.disabled = false;
    render();
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
