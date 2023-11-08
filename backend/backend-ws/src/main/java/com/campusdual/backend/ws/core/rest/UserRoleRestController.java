package com.campusdual.backend.ws.core.rest;

import com.campusdual.backend.api.core.service.IUserRoleService;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/userRole")
public class UserRoleRestController extends ORestController<IUserRoleService> {

    @Autowired
    private IUserRoleService userRoleService;
    @Override
    public IUserRoleService getService() {
        return this.userRoleService;
    }

}
