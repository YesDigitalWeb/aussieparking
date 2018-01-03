;(function($, w) {
  $(function() {
    $('#menu .nav-item a').each(function() {
      var pathname = location.pathname.replace(/\/$/, '');
      if ($(this).attr('href').replace(/\/$/, '') === pathname) {
        $(this).addClass('cur');

        var top = pathname.split('/').reverse()[0];
        $('body').addClass(top);
      }
    });

    // $('.time-select').timeEntry({
    //   show24Hours: true,
    //   timeSteps: [1, 1, 0],
    //   defaultTime: '00:00'
    // });

    $('#new').on('click', function() {
      var $form = $('#order-form');
      if ($form.hasClass('hidden')) {
        $form.attr('state', 'new');
        var newText = $form.find('h1').data('new-text');
        $form.find('h1').text(newText);

        // if($form.attr('state') !== 'new') {
          au.view.OrderForm.resetForm();
        // }
        AU.openForm();
      } else if ($form.attr('state') !== 'new') {
        AU.closeForm(function() {
          $form.attr('state', 'new');
          var newText = $form.find('h1').data('new-text');
          $form.find('h1').text(newText);

          au.view.OrderForm.resetForm();
          AU.openForm();
        });
      } else {
        AU.closeForm();
      }
    });

    $('.form-header .close').on('click', function() {
      AU.closeForm();
    });

    AU.openForm = function(func) {
      $('.form-inner').css('top', $(window).scrollTop()+'px');

      $('.form-wrapper').removeClass('hidden');
      $('.form-inner').stop().animate({
        right: 0
      },
      {
        queue: false,
        duration: 200,
        complete: function() {
          func && func();
        }
      });
    };

    AU.closeForm = function(func) {
      function hideForm () {
        $('.form-inner').stop().animate({
          right: -700
        },
        {
          queue: false,
          duration: 200,
          complete: function() {
            $('.form-wrapper').addClass('hidden');
            func && func();
          }
        });
      }

      if ($('#order-form').hasClass('dirty')) {
        au.view.MaskLayer.init(hideForm).show();
        return
      } else {
        hideForm();
      }
    }

    // mobile
    $('#menu-trigger').on('click', function() {
      $('#menu').toggleClass('invisi open');
    });
    $('#menu').on('click', function() {
      var self = this;
      $(this).removeClass('open');
      setTimeout(function() {
        $(self).addClass('invisi');
      }, 300);
    });

    $('#menu a').on('click', function(e) {
      e.stopPropagation ? e.stopPropagation() : event.cancelBubble = true;
    });

    $('.field-wrap [name]').on('focus', function() {
      $(this).parent().addClass('focus');
    }).on('blur', function() {
      $(this).parent().removeClass('focus');
    });

    function drawMonthlyBookingsKPIChart() {
      var elem = document.getElementById('monthly-bookings-chart');
      if (!elem) return;

      $.get('/calendar_monthly_bookings').done(function(resp) {
        var data = {
            labels: ['JAN', 'Feb', 'MAR', 'APR', 'May', 'Jun', 'Jul', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            datasets: [
                {
                    label: 'This year',
                    fillColor: 'transparent',
                    strokeColor: '#009688',
                    pointColor: '#BFE5E1',
                    pointStrokeColor: '#E6E6E6',
                    pointHighlightFill: '#BFE5E1',
                    pointHighlightStroke: '#009688',
                    data: resp.ThisYear
                },
                {
                    label: 'Last year',
                    fillColor: 'transparent',
                    strokeColor: '#FFC107',
                    pointColor: '#FFF8E1',
                    pointStrokeColor: '#E6E6E6',
                    pointHighlightFill: '#FFF8E1',
                    pointHighlightStroke: '#FFC107',
                    data: resp.LastYear
                }
            ]
        };
        var ctx = elem.getContext("2d");
        new Chart(ctx).Line(data, {
          scaleShowHorizontalLines: true,
          scaleShowVerticalLines: false,
          bezierCurve : false,
          pointDotRadius: 3
        });
      })
    }

    drawMonthlyBookingsKPIChart();

    if ( $('#container.booking-list').length ) {

      function alignThead() {
        var $head = $('.thead .thr-inner'),
            $row = $('.tbody .tr:first');

        $row.find('.td:visible').each(function(index, item) {
          var width = $(item).children('.data').width(),
              name = $(item).attr('name'),
              $th = $head.find('[name="'+name+'"]').addClass('align').children('a');

          $th.width(width);
        });
      }


      var timer  = '',
          $table = $('.table'),
          $thead = $('.thr-inner'),
          theadOffsetTop = $thead.offset().top;

      $(window).on('scroll', function(e) {
        var top = $(this).scrollTop();

        if (theadOffsetTop <= top) {
          $table.addClass('fixed');

          clearTimeout(timer);
          timer = setTimeout(function() {
            alignThead();
          }, 10);

        } else {
          $table.removeClass('fixed');
        }
      });

      $(window).on('resize', function() {
        if ( $table.hasClass('fixed') ) {
          clearTimeout(timer);
          timer = setTimeout(function() {
            alignThead();
          }, 10);
        }
      });
    }

    if ( $('#dashboard').length || $('#container.booking-list').length ) {
      function grabData($table) {
        var matrix = [];
        $table.find('.tbody .order-item:visible:not([state="cancelled"])').each(function(index) {

          matrix[index] = [];

          var row = matrix[index];

          $(this).find('.td').each(function(index) {
            var text = $(this).find('a').text(),
                name = $(this).attr('name');

            if ( ($(this).is(':visible') && name != 'Notes') || name == 'TagNo' ) {
              row.push([text, name]);
            }
          });
        });

        return matrix;
      }

      function grabHead($table) {
        var heads = [];
        $table.find('.th').each(function(index) {

        var text = $(this).find('a').text(),
            name = $(this).attr('name');

          if ( ($(this).is(':visible') && name != 'Notes') || name == 'TagNo' ) {
            heads.push([text, name]);
          }
        });

        return heads;
      }

      function generateTable(heads, matrix) {
        var table = '<table><thead><tr>';

        for (var h = 0; h < heads.length; ++h) {
          table += '<th name="' + heads[h][1] + '">' + heads[h][0] + '</th>';
        }

        table += '</tr></thead><tbody>';

        for (var i = 0; i < matrix.length; ++i) {
          table += '<tr>';

          var row = matrix[i];

          if (row[0][0].length > 5) {
            table = table.replace(/\>$/, ' class="out-of-date">');
          }

          for (var j = 0; j < row.length; ++j) {
            table += '<td name="' + row[j][1] + '">' + row[j][0] + '</td>'
          }

          table += '</tr>';
        }

        table += '</tbody></table>';

        return table;
      }

      function tableCompletion($table) {
        var height = 1122 - $table.outerHeight() % 1122,
            rowsCount = (height / 33 >> 0) - ($table.outerHeight() / 1122 >> 0),
            colsCount = $table.find('th').size(),
            rowx = '<tr class="extra">',
            rows = '';

        for (var j = 0; j < colsCount; ++j) {
          rowx += '<td>&nbsp;</td>';
        }

        rowx += '</tr>';

        for (var i = 0; i < rowsCount; ++i) {
          rows += rowx;
        }

        $table.find('tbody').append(rows);
      }

      function onPrintFinished() {
        $('#print-table').remove();
        $('.hidden-print').removeClass('hidden-print');
      }

      $('.action-print').on('click', function() {
        $('#order-form').addClass('hidden-print');
        $('#header').addClass('hidden-print');
        $('.chart-container').addClass('hidden-print');
        $('.table-item-wrapper').addClass('hidden-print');

        var $current = $(this).parents('.table-item-wrapper, .booking-list');

        $current.removeClass('hidden-print');

        var heads  = grabHead($current),
            matrix = grabData($current),
            table  = generateTable(heads, matrix);

        var $table = $('<div id="print-table">'),
            heading = $current.find('.heading').text();

        if ( $current.hasClass('checkin-out-today') ) {
          var type = $current.find('.tomorrow .select-type').val();

          switch(type) {
            case 'checkin':
                heading = 'Checkins Today';
            break;
            case 'checkout':
                heading = 'Checkouts Today';
            break;
            default:
                heading = 'Checkins & Checkouts Today';
          }
        }

        if ( $current.hasClass('booking-list') ) {
          var type = $current.find('.today .select-type').val();

          switch(type) {
            case 'checkin':
                heading = 'Checkins for ';
            break;
            case 'checkout':
                heading = 'Checkouts for ';
            break;
            default:
                heading = 'All bookings for ';
          }

          var dateText = $('#date-start .date-text').text().toLowerCase();

          if (dateText === "today") {
            dateText = moment().format('DD/MM/YYYY');
          }

          $table.append('<div id="print-logo"></div><h1>' + heading + dateText + '</h1>');

        } else {

          $table.append('<h1>' + heading
            .replace(/Today/i, '<span>' + moment().format('DD/MM/YYYY') + '</span>')
            .replace(/Tomorrow/i, '<span>' + moment().add(1, 'days').format('DD/MM/YYYY') + '</span>')
            .replace(/\)$/, ') <span>' + moment().format('DD/MM/YYYY') + '</span>')
            + '</h1>');
        }

        $table.append(table);
        $current.addClass('hidden-print');

        $('body').append($table);

        tableCompletion($table);

        onPrintFinished(window.print());
      });
    }
  });
})(jQuery, Window, undefined);
