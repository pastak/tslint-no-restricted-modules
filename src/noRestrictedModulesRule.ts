import * as Lint from "tslint";
import * as ts from "typescript";

export class Rule extends Lint.Rules.AbstractRule {
    public static FAILURE_STRING = "this module is restricted from being used.";

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new NoImportJqueryWalker(sourceFile, this.getOptions()));
    }
}

class NoImportJqueryWalker extends Lint.RuleWalker {
    public visitImportDeclaration(node: ts.ImportDeclaration) {
        if (this.containsCheck(node.moduleSpecifier.getText(), this.getOptions())) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
        }

        super.visitImportDeclaration(node);
    }
    private containsCheck(text: string, target: [string]): boolean {
        return target.some((a) => text.indexOf(a) > -1);
    }
}
