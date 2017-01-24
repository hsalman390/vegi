/*
 * File: app/view/LoginForm.js
 *
 * This file was generated by Sencha Architect version 3.5.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('App.view.login.Forgot', {
    extend: 'Ext.window.Window',
    alias: 'widget.forgotform',

    requires: [
		'App.view.login.LoginViewController',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

   // controller: 'loginlogin',
    /* viewModel: {
     type: 'loginform'
     },*/
     modal: true,
    height: 150,
	width: 420,
    title: 'Recover Account',
	layout: 'fit',
	closable: false,
    items: [
        {
            xtype: 'form',
			bodyPadding: 10,
			layout: {
				type: 'vbox',
				align: 'stretch'
			},
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Your Email',
                    labelAlign: 'right',
                    msgTarget: 'title',
                    name: 'useremail',
                    allowBlank: false,
                    emptyText: 'example@email.com',
					triggers: {
                        glyphed: {
                            cls: 'fa-envelope-o'
                        }
                    }
                }],
				dockedItems:[
				{
					xtype: 'container',
					dock: 'bottom',
					layout: {
						type: 'hbox',
						align: 'stretch',
						padding: 7,
					},
					items:[
					{
						xtype: 'tbspacer',
						flex: 1
					},
					{
						xtype: 'button',
						scale: 'medium',
						text: 'Send Email',
						listeners: {
							click: 'onSendEmailClick'
						}	
					}]
				}
			]
        }
    ]
});