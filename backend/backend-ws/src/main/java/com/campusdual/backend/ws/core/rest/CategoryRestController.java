package com.campusdual.backend.ws.core.rest;

import com.campusdual.backend.api.core.service.ICategoryService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/categories")
public class CategoryRestController extends ORestController<ICategoryService> {
    @Autowired
    private ICategoryService categoryService;
    @Override
    public ICategoryService getService() {
        return this.categoryService;
    }
}

