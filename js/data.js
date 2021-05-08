

            var url_string = window.location.href;
            var url = new URL(url_string);
            var a = document.getElementById('btn_open_project');
            a.href = "project.sketify://" + url;

