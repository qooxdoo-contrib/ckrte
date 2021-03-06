/**
 * Copyright (c) 2011 Derrell Lipman
 * 
 * License:
 *   LGPL: http://www.gnu.org/licenses/lgpl.html 
 *   EPL : http://www.eclipse.org/org/documents/epl-v10.php
 */

qx.Class.define("ckrte.toolbar.undo.Button",
{
  extend    : ckrte.toolbar.AbstractSimpleButton,
  include   : ckrte.toolbar.undo.MAction,

  construct : function(_ckrte)
  {
    // Define the tooltip and image to use for this button
    var             tooltip = "Undo Last Change";
    var             image = "qx/icon/Oxygen/16/actions/edit-undo.png";

    // Call the superclass constructor
    this.base(arguments, _ckrte, tooltip, image);
  }
});
