	$(document).ready(function() {
        $("#Refresh").click(function(){
            var data =
                [
                  {    "name": "Test"  },
                  {    "name": "Test"  },
                  {    "name": "Test"  },
                  {    "name": "Test"  },
                  {    "name": "Test"  },
                  {    "name": "Test"  },
                  {    "name": "Test"  }
                ];

            var items = "";
            jQuery.each(data, function() {
                items += "<div>"+this["name"]+"</div>"
            });

            $("#Results").html(items);
        });
    });
