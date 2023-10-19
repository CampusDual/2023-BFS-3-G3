package com.campusdual.backend.ws.core.rest;

import com.campusdual.backend.api.core.service.IServiceService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/gymservices")
public class ServiceRestController extends ORestController<IServiceService> {

    @Autowired
    private IServiceService serviceService;
    @Override
    public IServiceService getService() {
        return this.serviceService;
    }
}
