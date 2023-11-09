package com.campusdual.backend.api.core.service;


import java.util.List;
import java.util.Map;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;


public interface IUserRoleService {
    public EntityResult userRoleQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    public EntityResult userRoleInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
    public EntityResult myUserRoleInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
}