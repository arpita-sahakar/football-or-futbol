$(document).ready(function () {
    console.log("My new player form will go here.");
    
    $("#new-player").on("submit", function (e) {
      e.preventDefault();
      const firstName = $("#firstName").val();
      const lastName = $("#lastName").val();
      const acceleration = $("#acceleration").val();
      const speed = $("#speed").val();
      const strength = $("#strength").val();
      const agility = $("#agility").val();
      const kickPower = $("#kickPower").val();
      const tackle = $("#tackle").val();
      const jumping = $("#jumping").val();
      const stamina = $("#stamina").val();
      
      console.log(firstName);
      console.log(lastName);
      console.log(acceleration);
      console.log(speed);
  
      $.ajax({
        method: "POST",
        url: "/api/players",
        data: {
            firstName,
            lastName,
            acceleration,
            speed,
            strength,
            agility,
            kickPower,
            tackle,
            jumping,
            stamina,
        },
      }).then((response) => {
        window.location.replace("/players");
      });
    });
  });
