'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { NumInserter, InsertSettngs } from './NumInserter';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    //console.log('Congratulations, your extension "insertnumbers" is now active!');
    let settings = new InsertSettngs();
    let inserter = new NumInserter(settings);
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    context.subscriptions.push(vscode.commands.registerCommand('insertnumbers.insertNumbers', () => {
        inserter.processInsert();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('insertnumbers.insertNumbers.fix', () => {
        inserter.processInsert();
    }));
    context.subscriptions.push(settings);
    context.subscriptions.push(inserter);
}

// this method is called when your extension is deactivated
export function deactivate() {
}

