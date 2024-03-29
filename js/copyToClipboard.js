const copyTextToClipboard = (text) => {
  try {
    return navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy text to clipboard:", err);
  }
};

const copySenderProps = document.getElementById("copySenderProps");
const copyReceiverProps = document.getElementById("copyReceiverProps");

copySenderProps.addEventListener("click", async () => {
  const senderPropsDisabled = document.getElementById("senderPropsDisabled");
  await copyTextToClipboard(senderPropsDisabled.value);
});

copyReceiverProps.addEventListener("click", async () => {
  const receiverPropsDisabled = document.getElementById(
    "receiverPropsDisabled"
  );
  await copyTextToClipboard(receiverPropsDisabled.value);
});
