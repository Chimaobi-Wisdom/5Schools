var course = document.getElementById('course_id');
        var wrapper = document.getElementById('wrapper');
        var popUp = document.getElementById('course_pop');
        var close = document.getElementById('close');
        var home = document.getElementById('home');

        function myFunc(){
            popUp.style.display = 'block';
            wrapper.style.opacity = '0.3';
            course.style.textDecoration = 'underline';
            home.style.textDecoration = 'none';

        };

            function showHide(){
                if(popUp.style.display == 'block'){
                popUp.style.display = 'none'
            } else{
                popUp.style.display = 'block';
            };

            if(wrapper.style.opacity = '0.3'){
                wrapper.style.opacity = '1'
            }else{
                wrapper.style.opacity = '0.3'
            };

            };

        course.addEventListener('click', myFunc);
        close.addEventListener('click', showHide);

        var coursesList = document.getElementById('course_list');
        var boxes = document.getElementsByClassName('boxes');

        function courseList(){
          coursesList.style.display = 'block';
          wrapper.style.opacity = '0.3'; 
        };