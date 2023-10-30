package com.campusdual.backend.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

import java.util.List;
import java.util.Map;

public interface IEventService {
    public EntityResult eventQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    public EntityResult eventInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
    public EntityResult eventUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
    public EntityResult eventDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
}
