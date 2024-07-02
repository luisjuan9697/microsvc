document.getElementById("pingButton").addEventListener("click", async () => {
    try {
      const response = await fetch("/ping");
      const result = await response.json();
      document.getElementById("pingResult").textContent = `Server time: ${result.now}`;
    } catch (error) {
      document.getElementById("pingResult").textContent = "Error pinging server.";
    }
  });
  