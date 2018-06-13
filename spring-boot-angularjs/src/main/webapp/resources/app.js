
var app = angular.module( 'app', [ 'ui.grid', 'ui.grid.treeView', 'ui.grid.selection' ] );

app.controller( 'MainCtrl', function( $scope ) {
  var data = [
    { number: '1' , name: 'one'  , $$treeLevel: 0 },
    { number: '2' , name: 'two'  , $$treeLevel: 0 },
    { number: '2a', name: 'twoa' , $$treeLevel: 1 },
    { number: '2b', name: 'twob' , $$treeLevel: 1 },
    { number: '3' , name: 'three', $$treeLevel: 0 },
    { number: '4' , name: 'four' , $$treeLevel: 0 },
    { number: '4a', name: 'foura', $$treeLevel: 1 },
    { number: '4b', name: 'fourb', $$treeLevel: 1 }
  ];
  
  $scope.gridOptions = {
    data: data,
    enableSorting: false,
    enableFiltering: false,
    showTreeExpandNoChildren: false,
    enableRowSelection: false,
    enableRowHeaderSelection: true,
    multiSelect: false,
    noUnselect: true,
    modifierKeysToMultiSelect: false,
    columnDefs: [
      { name: 'number' },
      { name: 'name' }
    ],
    onRegisterApi: function( gridApi ) {
      $scope.gridApi = gridApi; // i'd recommend a promise or deferred for this
      
      var onRowsRenderedOff = gridApi.core.on.rowsRendered( null, function() {
        onRowsRenderedOff(); // run once
        triggerRowSelectOnClick( '#grid1' ); // requires '.ui-grid-canvas'
      } );
    }
  };
  
  function triggerRowSelectOnClick( yourGridId ) {
    $( yourGridId + ' .ui-grid-contents-wrapper > [role=grid] .ui-grid-canvas' )
    .delegate( '.ui-grid-row', 'click', function( ev ) {
      jqRow = $( this ); // '.ui-grid-row'
      var index = jqRow.index();
      var commonAncestor = jqRow.closest( yourGridId + ' .ui-grid-contents-wrapper' );

      var selectButtonQuery = [
        '.ui-grid-pinned-container', // left side class
        '[role=grid] .ui-grid-canvas', // redundant, but doesn't hurt
        '.ui-grid-row .ui-grid-selection-row-header-buttons' // select button class
      ].join( ' ' );
      var checkboxDiv = commonAncestor.find( selectButtonQuery );
      checkboxDiv.get( index ).click();
    } );
  }
  
} );


