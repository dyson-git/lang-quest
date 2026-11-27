// HZ_ROWS(행 데이터) → HANZI 항목 + HANZI_LESSONS. 한글 읽기는 ENGINE이 생성한다.
(function () {
  var E = window.ENGINE;
  window.HANZI_LESSONS.forEach(function (l) { l.title = "1단계 · " + l.title; });
  Object.keys(window.HZ_ROWS || {}).forEach(function (stage) {
    window.HZ_ROWS[stage].forEach(function (les, li) {
      var chars = [];
      les.rows.forEach(function (r) {
        var rd = E.readings(r[6]), jr = E.kana(r[14]);
        var pk = E.pyKo(r[5], false);
        window.HANZI[r[0]] = {
          zh: r[0], zt: r[1] || "", jp: r[2], m: r[3], e: r[4], py: r[5], pk: pk,
          jk: r[6], jr: rd.jr, jko: rd.jko, parts: r[7] ? r[7].split(" ") : null,
          org: r[8], sto: r[9],
          cx: r[10] + " " + r[11] + " " + E.pyKo(r[11], false) + " = " + r[12],
          jx: r[13] + " " + r[14] + " " + jr.ko + " = " + r[15]
        };
        chars.push(r[0]);
      });
      window.HANZI_LESSONS.push({ id: "s" + stage + "_" + (li + 1), title: stage + "단계 · " + les.title, chars: chars });
    });
  });
  // 손으로 쓴 초기 한자(hanzi.js)도 같은 규칙으로 한글 발음을 다시 만든다
  Object.keys(window.HANZI).forEach(function (k) {
    var h = window.HANZI[k];
    if (h.py && h.py.indexOf(" / ") < 0) h.pk = E.pyKo(h.py, false);
    if (h.jk) { try { h.jko = E.readings(h.jk).jko; } catch (e) {} }
  });
})();
