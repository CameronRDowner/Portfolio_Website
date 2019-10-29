$(document).ready(function(){
    var certificationModal = $('#certification-item-modal');

    function animateModal(x) {
        $('.modal .modal-dialog').attr('class', 'modal-dialog  ' + x + '  animated');
    };

    certificationModal.on('show.bs.modal', function (e) {
        animateModal('flipInX');
      })
      certificationModal.on('hide.bs.modal', function (e) {
        animateModal('flipOutX');
      })


})