package com.campusdual.backend.api.core.service;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import java.util.List;
import java.util.Map;
public interface IPaymentService {

    public EntityResult paymentQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    public EntityResult paymentInsert(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
    public EntityResult paymentUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
    public EntityResult paymentDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
}
