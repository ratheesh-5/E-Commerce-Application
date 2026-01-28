jQuery(document).ready(function () {
    //$("body").toggleClass("lean_collapsed");
    $('[data-toggle="tooltip"]').tooltip();

     $('[data-toggle="datepicker"]').datepicker(
         {
             autoHide: true,
             zIndex: 2048,
            format: 'DD/MM/YYYY' 
         }
     );

    //$('.date-picker').flatpickr({
    //    enableTime: false,
    //    altFormat: "F j, Y",
    //    dateFormat: "M-d-Y"
    //});

});

function AddBlurScreenforSidebarPopup() {
    $("body").prepend("<div class='overlay-bg'></div>");
}

function openCreateNav() {
    AddBlurScreenforSidebarPopup();
    disableScroll();
    $("#sidebar-container").css("width", "300px");
    $("#main-container").css("margin-right", "0px");
    $("#half-width-sidebar").css("width", "35%");
    $(".form-label-question").css("color", "#0076be");
    $("#full-width-sidebar").css("width", "76%");
    $("#create-div").show();
    $("#edit-div").hide();
    $("#detail-div").hide();
    $("#preview-div").hide();
    $("#metricedit-div").hide();
    $("#metricadd-div").hide();
    $("#metricdetail-div").hide();
    $("#detail-div").hide();
    $("#attachments-div").hide();
    $("#detailMetric-div").hide();
    $("#addMetric-div").hide();
    $("#editMetric-div").hide();
    $("#shared-div").hide();

}


function openEditNav() {
    AddBlurScreenforSidebarPopup();
    disableScroll();
    $("#sidebar-container").css("width", "300px");
    $("#main-container").css("margin-right", "0px");
    $("#full-width-sidebar").css("width", "76%");
    $("#create-div").hide();
    $("#edit-div").show();
    $("#detail-div").hide();
    $("#preview-div").hide();
    $("#metricadd-div").hide();
    $("#metricdetail-div").hide();
    $("#detail-div").hide();
    $("#attachments-div").hide();
    $("#detailMetric-div").hide();
    $("#addMetric-div").hide();
    $("#editMetric-div").hide();
    $("#detailMetric-div").hide();
    $("#shared-div").hide();

}

function openDetailNav() {
    AddBlurScreenforSidebarPopup();
    disableScroll();
    $("#sidebar-container").css("width", "300px");
    $("#main-container").css("margin-right", "0px");
    $("#full-width-sidebar").css("width", "76%");
    $("#create-div").hide();
    $("#edit-div").hide();
    $("#preview-div").hide();
    $("#detail-div").show();
    $("#metricadd-div").hide();
    $("#metricedit-div").hide();
    $("#metricdetail-div").hide();
    $("#attachments-div").hide();
    $("#detailMetric-div").hide();
    $("#editMetric-div").hide();
    $("#addMetric-div").hide();
    $("#shared-div").hide();

}
function openPreviewNav() {
    AddBlurScreenforSidebarPopup();
    disableScroll();
    $("#sidebar-container").css("width", "300px");
    $("#main-container").css("margin-right", "0px");
    $("#full-width-sidebar").css("width", "76%");
    $("#create-div").hide();
    $("#edit-div").hide();
    $("#detail-div").hide();
    $("#preview-div").show();
    $("#metricadd-div").hide();
    $("#metricedit-div").hide();
    $("#metricdetail-div").hide();
    $("#attachments-div").hide();
    $("#detailMetric-div").hide();
    $("#editMetric-div").hide();
    $("#addMetric-div").hide();
    $("#shared-div").hide();

}

function openCreateMetric() {
    AddBlurScreenforSidebarPopup();
    disableScroll();
    $("#sidebar-container").css("width", "300px");
    $("#main-container").css("margin-right", "0px");
    $("#full-width-sidebar").css("width", "76%");
    $("#create-div").hide();
    $("#edit-div").hide();
    $("#detail-div").hide();
    $("#preview-div").hide();
    $("#metricdetail-div").hide();
    $("#metricedit-div").hide();
    $("#metricadd-div").show();
    $("#attachments-div").hide();
    $("#detailMetric-div").hide();
    $("#editMetric-div").hide();
    $("#addMetric-div").hide();
    $("#shared-div").hide();

}
function openEditMetric() {
    AddBlurScreenforSidebarPopup();
    disableScroll();
    $("#sidebar-container").css("width", "300px");
    $("#main-container").css("margin-right", "0px");
    $("#full-width-sidebar").css("width", "76%");
    $("#create-div").hide();
    $("#edit-div").hide();
    $("#detail-div").hide();
    $("#preview-div").hide();
    $("#metricadd-div").hide();
    $("#metricdetail-div").hide();
    $("#metricedit-div").show();
    $("#attachments-div").hide();
    $("#addMetric-div").hide();
    $("#detailMetric-div").hide();
    $("#editMetric-div").hide();
    $("#addMetric-div").hide();
    $("#shared-div").hide();

}
function openDetailMetric() {
    AddBlurScreenforSidebarPopup();
    disableScroll();
    $("#sidebar-container").css("width", "300px");
    $("#main-container").css("margin-right", "0px");
    $("#full-width-sidebar").css("width", "76%");
    $("#create-div").hide();
    $("#edit-div").hide();
    $("#detail-div").hide();
    $("#preview-div").hide();
    $("#metricadd-div").hide();
    $("#metricedit-div").hide();
    $("#attachments-div").hide();
    $("#metricdetail-div").show();
    $("#addMetric-div").hide();
    $("#editMetric-div").hide();
    $("#detailMetric-div").hide();
    $("#shared-div").hide();
}
function openAttachmentdiv() {
    AddBlurScreenforSidebarPopup();
    disableScroll();
    $("#full-width-sidebar").css("width", "40%");
    $("#create-div").hide();
    $("#edit-div").hide();
    $("#detail-div").hide();
    $("#preview-div").hide();
    $("#metricadd-div").hide();
    $("#metricedit-div").hide();
    $("#metricdetail-div").hide();
    $("#addMetric-div").hide();
    $("#attachments-div").show();
    $("#detailMetric-div").hide();
    $("#editMetric-div").hide();
    $("#addMetric-div").hide();
    $("#shared-div").hide();

}

function openmetricdiv() {
    AddBlurScreenforSidebarPopup();
    disableScroll();
    $("#full-width-sidebar").css("width", "40%");
    $("#create-div").hide();
    $("#edit-div").hide();
    $("#detail-div").hide();
    $("#preview-div").hide();
    $("#metricadd-div").hide();
    $("#metricedit-div").hide();
    $("#metricdetail-div").hide();
    $("#attachments-div").hide();
    $("#detailMetric-div").hide();
    $("#editMetric-div").hide();
    $("#addMetric-div").show();
    $("#shared-div").hide();


}
function openmetriceditdiv() {
    AddBlurScreenforSidebarPopup();
    disableScroll();
    $("#full-width-sidebar").css("width", "40%");
    $("#create-div").hide();
    $("#edit-div").hide();
    $("#detail-div").hide();
    $("#preview-div").hide();
    $("#metricadd-div").hide();
    $("#metricedit-div").hide();
    $("#metricdetail-div").hide();
    $("#attachments-div").hide();
    $("#detailMetric-div").hide();
    $("#addMetric-div").hide();
    $("#detailMetric-div").hide();
    $("#editMetric-div").show();
    $("#detailMetric-div").hide();
    $("#shared-div").hide();

}
function openmetricdetaildiv() {
    AddBlurScreenforSidebarPopup();
    disableScroll();
    $("#full-width-sidebar").css("width", "40%");
    $("#create-div").hide();
    $("#edit-div").hide();
    $("#detail-div").hide();
    $("#preview-div").hide();
    $("#metricadd-div").hide();
    $("#metricedit-div").hide();
    $("#metricdetail-div").hide();
    $("#attachments-div").hide();
    $("#addMetric-div").hide();
    $("#editMetric-div").hide();
    $("#detailMetric-div").show();
    $("#shared-div").hide();


}
function openShareddiv() {
    $("#full-width-sidebar").addClass('responsive_class');
    //  $("#full-width-sidebar").css("width", "35%");
    $("#create-div").hide();
    $("#edit-div").hide();
    $("#detail-div").hide();
    $("#preview-div").hide();
    $("#metricadd-div").hide();
    $("#metricedit-div").hide();
    $("#metricdetail-div").hide();
    $("#addMetric-div").hide();
    $("#attachments-div").hide();
    $("#detailMetric-div").hide();
    $("#editMetric-div").hide();
    $("#addMetric-div").hide();
    $("#shared-div").show();
}
function closeNav() {
    $("#full-width-sidebar").css("width", "0");
    $("#sidebar-container").css("width", "0");
    $("#half-width-sidebar").css("width", "0");
    $("#main-container").css("margin-right", "0");
    $(".form-label-question").css("color", "#000");
    $(".overlay-bg").remove();
    $("#full-width-sidebar").removeClass('responsive_class');
    enableScroll();
}

function disableScroll() {
    // Get the current page scroll position 
    scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, 
        // set this to the previous value 
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
} 

$("#mainMenuToggle").click(function () {
    $("body").removeClass("show_menu");
    $("body").toggleClass("lean_collapsed");
    
});


$("#msb-sidebar").click(function () {
    $("body").toggleClass("show_menu");
    $("body").removeClass("lean_collapsed");
   
});

var showChar = 100;
var ellipsestext = "...";
var moretext = "More";
var lesstext = "Less";
$('.more').each(function () {
    var content = $(this).html();

    if (content.length > showChar) {

        var c = content.substr(0, showChar);
        var h = content.substr(showChar - 1, content.length - showChar);

        var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

        $(this).html(html);
    }

});

$(".morelink").click(function () {
    if ($(this).hasClass("less")) {
        $(this).removeClass("less");
        $(this).html(moretext);
    } else {
        $(this).addClass("less");
        $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
});



$(document).on('click', '.addUSER', function (e) {
    $("#customFields").append('<div class="adduser-div mt-3 row order-last"><div class="col-md-6 ml-5"> <input type="text" class="form-control" placeholder="Search"> </div><div class="col-md-1 mt-1 order-last"> <div class="action-list d-block text-left"> <ul> <li><a href="javascript:void(0)" class="edit_user addUSER mr-2"><i class="fas fa-plus"></i></a></li><li><a href="javascript:void(0)" class="delete_user deleteUser"><i class="fas fa-trash-alt"></i></a></li></ul> </div></div><div class="col-md-6 mt-2 ml-5"> <textarea class="form-control " placeholder="Reason for recognition"></textarea> </div></div>');

});
$("#customFields").on('click', '.deleteUser', function () {
    $(this).parents(".adduser-div").remove();
});




$(document).on('click', '.addCFF', function (e) {
    $("#metricfields").append(' <tr> <td> <input type="text" class="form-control"> </td><td><select class="form-control"> <option selected>Select</option> <option>Time Saving</option> </select></td><td> <input type="text" class="form-control"></td><td> <input type="text" class="form-control"> </td><td> <input type="text" value="" class="form-control"></td><td> <select class="form-control">  <option> Select </option> <option> Minutes </option> <option > USD </option> </select> </td><td> <div class="action-list d-block text-center"> <ul> <li><a href="javascript:void(0)" class="edit_user addCFF mr-2" ><i class="fas fa-plus"></i></a></li><li ><a href="javascript:void(0)" class="delete_user remCFF"><i class="fas fa-trash-alt"></i></a></li></ul> </div></td></tr>');

});
$("#metricfields").on('click', '.remCFF', function () {
    $(this).parents("tr").remove();
});


// capture metrics
$(document).on('click', '.addCM', function (e) {
    $("#customManagement").append('<tr><td><input type="text" class="form-control" > </td><td> <input type="text" class="form-control" > </td><td> <input type="text" class="form-control" > </td><td> <input type="text" class="form-control" > </td><td> <div class="action-list d-block text-center"> <ul> <li><a href="#" class="edit_user mr-1 addCM"><i class="fas fa-plus"></i></a> </li><li ><a href="#" class="delete_user remCM"><i class="fas fa-trash-alt"></i></a></li></ul> </div></td></tr>');

});
$("#customManagement").on('click', '.remCM', function () {
    $(this).parents("tr").remove();
});

$(document).on('click', '.addCM1', function (e) {
    $("#customManagement1").append('<tr><td> <input type="text" class="form-control" > </td><td> <div class="action-list d-block text-center"> <ul> <li><a href="#" class="edit_user mr-1 addCM1"><i class="fas fa-plus"></i></a> </li><li ><a href="#" class="delete_user remCM1"><i class="fas fa-trash-alt"></i></a></li></ul> </div></td></tr>');

});
$("#customManagement1").on('click', '.remCM1', function () {
    $(this).parents("tr").remove();
});

$(document).on('click', '.addCM2', function (e) {
    $("#customManagement2").append('<tr><td><input type="text" class="form-control" > </td><td> <div class="action-list d-block text-center"> <ul> <li><a href="#" class="edit_user mr-1 addCM2"><i class="fas fa-plus"></i></a> </li><li ><a href="#" class="delete_user remCM2"><i class="fas fa-trash-alt"></i></a></li></ul> </div></td></tr>');

});
$("#customManagement2").on('click', '.remCM2', function () {
    $(this).parents("tr").remove();
});

$(document).on('click', '.addCM3', function (e) {
    $("#customManagement3").append('<tr><td> <input type="text" class="form-control" > </td><td> <div class="action-list d-block text-center"> <ul> <li><a href="#" class="edit_user mr-1 addCM3"><i class="fas fa-plus"></i></a> </li><li ><a href="#" class="delete_user remCM3"><i class="fas fa-trash-alt"></i></a></li></ul> </div></td></tr>');

});
$("#customManagement3").on('click', '.remCM3', function () {
    $(this).parents("tr").remove();
});

$(document).on('click', '.addCM4', function (e) {
    $("#customManagement4").append('<tr><td> <input type="text" class="form-control" > </td><td> <div class="action-list d-block text-center"> <ul> <li><a href="#" class="edit_user mr-1 addCM4"><i class="fas fa-plus"></i></a> </li><li ><a href="#" class="delete_user remCM4"><i class="fas fa-trash-alt"></i></a></li></ul> </div></td></tr>');

});
$("#customManagement4").on('click', '.remCM4', function () {
    $(this).parents("tr").remove();
});


$('a').on('click', function () {
    var target = $(this).attr('rel');
    $(target).removeClass('disabled');
    $("#" + target).show().siblings("div").hide();
});
//Password toggle for show/hide
$(".toggle-password").click(function () {

    $(this).toggleClass("fe fe-eye  fe fe-eye-off");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});

$('#loader').fadeOut(1000);
$('.vertical-tabs ul li').on('click', 'a', function () {
    $('.vertical-tabs ul li a.active').removeClass('active');
    $(this).addClass('active');
});


//Sidebar Menu Active
$(function () {
    $('.nav  li').click(function () {
        var item = $('a', this).attr('rel');

        //if ($(this).is(':first-child')) {
        //    $(this).removeClass('active');
        //}

         if (($('a', this).attr('rel')) == item) {

            // Activate corresponding div
            var res = '#' + item;
            $(res).show();

            $(this).addClass('active');
            $(".nav-item li.active").removeClass("active").addClass("active");
            $(this).siblings().removeClass('active');

            $(res).siblings().removeClass('active');
            $(res).addClass('active');
        }



    });
});

$('.main-heading').on('click', 'a', function () {
    $('.main-heading a.active').removeClass('active');
    $(this).addClass('active');
});

$(".show_filter").hide();
$("#filter-section").click(function () {
    $(".show_filter").toggle();
    $(this).find('i').toggleClass('fe fe-chevron-down fe fe-chevron-up')
});

$(".admin-show_filter").show();
$("#admin-filter-section").click(function () {
    $(".admin-show_filter").toggle();
    $(this).find('i').toggleClass('fe fe-chevron-down fe fe-chevron-up')
});


$(".pdca-show_filter").hide();
$("#pdca-filter-section").click(function () {
    $(".pdca-show_filter").toggle();
    $(this).find('i').toggleClass('fe fe-chevron-down fe fe-chevron-up')
});



$(".show_report").show();
$("#report-section").click(function () {
    $(".show_report").toggle();
    $(this).find('i').toggleClass('fe fe-chevron-down fe fe-chevron-up')
});



$(".dashboardshow_filter").hide();
$("#dashboard-section").click(function () {
    $(".dashboardshow_filter").toggle();
    $(this).find('i').toggleClass('fas fa-chevron-circle-down fas fa-chevron-circle-up')
});



// $('ul.term-list').each(function () {

//     var LiN = $(this).find('li').length;

//     if (LiN > 6) {
//         $('li', this).eq(6).nextAll().hide().addClass('toggleable');
//         $(this).append('<li class="more load_user">Load More Users</li>');
//     }

// });
// $('ul.term-list').on('click', '.more', function () {

//     if ($(this).hasClass('less')) {
//         $(this).text('Load More Users').removeClass('less');
//     } else {
//         $(this).text('Hide More Users').addClass('less');
//     }

//     $(this).siblings('li.toggleable').slideToggle();

// });


//SSO Enable
$(".showsso").hide();
$("#sso").click(function () {
    $(".showsso").toggle();
});

// simple tree 

$("#collapser").hide();
$("#collapser").click(function () {
    $("#collapser").hide();
    $("#expander").show();
});
$("#expander").click(function () {
    $("#collapser").show();
    $("#expander").hide();
});

$('.psw').keyup(function () {
    var pswd = $(this).val();

    if (pswd.match(lowerCaseLetters)) {
        $('#letter').removeClass("invalid").addClass("valid");
    } else {
        $('#letter').removeClass("valid").addClass("invalid");
    }

    if (pswd.match(upperCaseLetters)) {
        $('#captial').removeClass("invalid").addClass("valid");
    } else {
        $('#captial').removeClass("valid").addClass("invalid");
    }

    // Validate numbers

    if (pswd.match(numbers)) {
        $('#number').removeClass("invalid").addClass("valid");
    } else {
        $('#number').removeClass("valid").addClass("invalid");
    }

    // Validate length
    if (pswd.length >= 6) {
        $('#length').removeClass("invalid").addClass("valid");
    } else {
        $('#length').removeClass("valid").addClass("invalid");
    }
    // Validate specialchar
    if (pswd.match(specialchar)) {
        $('#char').removeClass("invalid").addClass("valid");
    } else {
        $('#char').removeClass("valid").addClass("invalid");
    }
});

$('.psw').focus(function () {
    $('#pswd_info').show();
});

// When the user clicks outside of the password field, hide the message box
$('.psw').blur(function () {
    $('#pswd_info').hide();
});
//Password Hints

var lowerCaseLetters = /[a-z]/g;//lowercase letters
var upperCaseLetters = /[A-Z]/g;//upperrcase letters
var numbers = /[0-9]/g;//numbers
var specialchar = ("[!/\'^�$%&*()}{@#~?><>,|=_+�-\]");//special charecters



$(document).on('click', '.addOR', function (e) {
    $("#customFields_oradmin").append('<div class="row" ><div class="form-group col-md-6"> <label class="form-label">Email Address <span class="required">*</span> </label> <input type="text" class="form-control"/> </div><div class="col-md-6 col-12"> <div class="form-group"> <label for="">Password <span class="required">*</span></label> <input type="password" class="form-control psw"> <div class="list-group pwdins" id="pswd_info"> <small class="text-normal d-sm-block mt-2"><i class="fa fa-lock mr-2"></i> Your password needs to:</small> <ul> <li id="letter" class="form-text invalid">include at least one lower case</li><li id="captial" class="form-text invalid ">include at least one upper case</li><li id="number" class="form-text invalid ">include at least one number</li><li id="char" class="form-text invalid ">include at least one special character</li><li id="length" class="form-text invalid ">be at least 6 characters long</li></ul> </div></div></div><div class="form-group col-md-6"> <label class="form-label">First Name <span class="required">*</span> </label> <input type="text" class="form-control"/> </div><div class="form-group col-md-6"> <label class="form-label">Last Name <span class="required">*</span> </label> <input type="text" class="form-control"/> </div><div class="form-group col-md-6"> <label class="form-label">Contact Number <span class="required">*</span> </label> <input type="text" class="form-control"/> </div><div class="col-md-6 form-group"> <label class="form-label"> Activation Status <span class="required">*</span></label> <select class="form-control"> <option> Select </option> <option> Active</option> <option> Inactive</option> <option> Blocked</option> </select> </div></div> <div class="row mb-3"> <div class="col-md-6" > <a href="#" class=" d-flex addOR"> <span class="edit_user mr-2"> <i class="fas fa-plus "></i> </span> Add More Admin </a> </div><div class="col-md-3 offset-md-3 mb-2 add_remove" > <a href="#" class=" d-flex removeOR text-danger"> <span class="delete_user mr-2"> <i class="fas fa-trash "></i> </span> Remove Admin </a> </div></div>  ');

});
$("#customFields_oradmin").on('click', '.removeOR', function () {
    $(this).parents("tr").remove();
});

$('ul.treeview li a.active_record').on('click', function () {
    $('ul.treeview li .a_record').addClass('active');
    $('ul.treeview li .ina_record').removeClass('inactive');
    // $('ul.treeview li ul li .a_record' ).addClass('active');
});

$('ul.treeview li a.inactive_record').on('click', function () {
    $('ul.treeview li .a_record').removeClass('active');
    $('ul.treeview li .ina_record').addClass('inactive');
    //$('ul.treeview li ul li .ina_record' ).addClass('inactive');
});


$('.a3_project a.my_A3').on('click', function () {
    $('.a3_project a.my_A3').addClass('active'); 
    $('.a3_project a.my_orgA3').removeClass('active');
    //$('ul.treeview li ul li .ina_record' ).addClass('inactive');
});
$('.a3_project a.my_orgA3 ').on('click', function () {
    $('.a3_project a.my_A3').removeClass('active'); 
    $('.a3_project a.my_orgA3').addClass('active'); 
    //$('ul.treeview li ul li .ina_record' ).addClass('inactive');
});


$(" .primary   ul.nav.nav-middle li a.nav-link ").click(function () {
    $("body").removeClass("lean_collapsed");
    $("body").removeClass("show_menu");
});


$('.div_section1').on('click', 'a', function () {
    $('.card.dashboard-card.card_border.div_section1').addClass('active');
});
$('.div_section2').on('click', 'a', function () {
    $('.card.dashboard-card.card_border.div_section2').addClass('active');
});
$('.div_section3').on('click', 'a', function () {
    $('.card.dashboard-card.card_border.div_section3').addClass('active');
});
$('.div_section4').on('click', 'a', function () {
    $('.card.dashboard-card.card_border.div_section4').addClass('active');
});



$('body').on('click', '#SettingsShow', function(e){
    e.preventDefault()  
    $('.forum_settings').toggleClass('show');
  })

  $(".inactive_records").hide();
$(".inactive_count").click(function () {
    $(this).find(".inactive_records").toggle();
});

$('.border-dotted-active input[type="checkbox"]').on('change', function (e) {
    if (e.target.checked) {
        $('#notification_enable').modal();
    }
    else {
        $('#notification_disable').modal();
    }
});



$('.enablescheduled_data_sync input[type="radio"]').click(function () {
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".box1").not(targetBox).hide();
    $(targetBox).show();
});

// reduce font size
$(".page-title #mainMenuToggle").click(function () {
    $('.page-title .text_change').toggleClass('reduce_size');
});

// reduce file size font size
$(".page-title #mainMenuToggle").click(function () {
    $('.fileupload-filename').toggleClass('reduce_filesize');
});
 