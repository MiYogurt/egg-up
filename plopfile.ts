export = (plop) =>  {
    plop.setGenerator('controller', {
        description: 'application controller logic',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'controller name please'
        }],
        actions: [{
            type: 'add',
            path: 'app/controller/{{name}}.ts',
            templateFile: 'plop_templates/controller.hbs'
        }]
    });
};
