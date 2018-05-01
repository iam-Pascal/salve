$(function () {

    $('#menu-toggle-2')
        .click(function () {
            console.log('clicked');
            $('#wrapper').toggleClass('sidebar-toggle');
            $('#sidebar-wrapper').toggleClass('sidebar-toggle');
            $('#menu-toggle-2').toggleClass('sidebar-toggle');
        });

    $left = $(".left");
    $right = $(".right");

    // $(".toggled-2").click(function () {     $left.toggleClass("toggled-2"); });
    // $left.hover(function () {     $left.toggleClass("hover-left-width"); });
    // $(".sidebar-row").click(function () {
    // $(".sidebar-row").removeClass("active");     $(this).toggleClass("active");
    // }); add admin form submit intercept
    $('.add-admin-form').submit(() => {
        if (confirm("Please, Copy your password before Submitting!"))
            return true;
        return false;
    });

    // password change modal togglers
    $('[data-target="#myModal"]').click(function () {
        $('.change-pswd-form').attr('action', $(this).data('path') + $(this).data('id'));
        $('#pwd-admin-target').text($(this).data('name'));
    });

    // password reveal buttons
    $('#spwd a').click(function (e) {
        e.preventDefault();

        $box = $($(this).closest('#spwd'));
        $box.toggleClass('shown');
        if ($box.hasClass('shown'))
            $('[type=password]', $box).attr('type', 'text');
        else
            $('input', $box).attr('type', 'password');
    });

    // user status togglers
    $('.toggle-user-status').click((e) => {
        if (!confirm("You are about to disble a user. This action is reversible. Do you want to contin" +
                "ue?"))
            e.preventDefault();
    });

    // event action
    $('.delete-event').click((e) => {
        if (!confirm("You are about to delete an Event. This action is reversible. Do you want to cont" +
                "inue?"))
            e.preventDefault();
    });
    // applicant delete action

    $('.delete-applicant').click((e) => {
        if (!confirm("Do you want to delete this application? This action is reversible. Do you want t" +
                "o Continue?"))
        ;
        e.preventDefault();
    });
    //Generate password for user
    $('#pwdgen').click(function () {
        var _pwdgen = this;
        $(this).attr('disabled', 'disabled');

        $.get(API + 'login/pwd', null, (data) => {
            $('[name="userpass"]').val(data.data);
            $(_pwdgen).removeAttr('disabled');
        }).error((e) => {
            $(_pwdgen).removeAttr('disabled');
        })
    })

    // handle view-user table row click
    $('tr[data-clickable]').click(function (e) {
        if (e.target.hasAttribute('href'))
            return;
        else
            window
            .location
            .assign($(this).data().href);
    });
    //the datatables for people, event, application
    $('#data-table').dataTable();

    //fetch calendar for event date

    $('#event').datepicker({
        dateFormat: 'dd-m-yy',
        changeYear: true,
        changeMonth: true,
        yearRange: '2016:' + new Date().getFullYear()
    });

    //animate scroll for pages
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function () {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
            });
        });
});
