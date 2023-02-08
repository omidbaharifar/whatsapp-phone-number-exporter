let finalList = [];

document
  .querySelectorAll("._199zF._3j691 ._8nE1Y .y_sn4 ._21S-L ._7T_0D span")
  .forEach((item) => {
    /^[0-9 + ]+$/.test(item.innerHTML) &&
      finalList.push(
        item.innerHTML.replace(/\s/g, "").replace("+98", "0") + "\n"
      );
  });

const link = document.createElement("a");
const file = new Blob(finalList, { type: "text/plain" });
link.href = URL.createObjectURL(file);
link.download = "phone numbers.txt";
link.click();
